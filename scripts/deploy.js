const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

const PRICE_BATCH_SIZE = 20;

function resolvePricingFile(pricingFile) {
  if (!pricingFile) return null;
  return path.isAbsolute(pricingFile)
    ? pricingFile
    : path.join(process.cwd(), pricingFile);
}

function parsePriceToWei(row) {
  const weiValue = row.target_price_wei?.trim();
  if (weiValue) {
    return BigInt(weiValue);
  }

  const ethValue = row.target_price_eth?.trim();
  if (ethValue) {
    return hre.ethers.parseEther(ethValue);
  }

  return null;
}

function loadTokenPrices(pricingFile) {
  if (!pricingFile) return [];

  const resolvedPath = resolvePricingFile(pricingFile);
  const raw = fs.readFileSync(resolvedPath, "utf8").trim();
  if (!raw) return [];

  const [headerLine, ...lines] = raw.split(/\r?\n/);
  const headers = headerLine.split(",");
  const tokenIdIndex = headers.indexOf("token_id");
  const ethIndex = headers.indexOf("target_price_eth");
  const weiIndex = headers.indexOf("target_price_wei");

  if (tokenIdIndex === -1 || (ethIndex === -1 && weiIndex === -1)) {
    throw new Error(
      `Pricing CSV must include token_id and either target_price_eth or target_price_wei: ${resolvedPath}`
    );
  }

  return lines
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const columns = line.split(",");
      const row = {
        token_id: columns[tokenIdIndex],
        target_price_eth: ethIndex === -1 ? "" : columns[ethIndex],
        target_price_wei: weiIndex === -1 ? "" : columns[weiIndex],
      };
      const tokenId = BigInt(row.token_id.trim());
      const priceWei = parsePriceToWei(row);
      return priceWei === null ? null : { tokenId, priceWei };
    })
    .filter(Boolean);
}

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const owner = process.env.INITIAL_OWNER || deployer.address;
  const baseTokenURI = process.env.BASE_TOKEN_URI || "";
  const maxSupply = BigInt(process.env.MAX_SUPPLY || "50");
  const pricingFile =
    process.env.TOKEN_PRICING_CSV || "artwork-pricing-template.csv";
  const tokenPrices = loadTokenPrices(pricingFile);

  const Contract = await hre.ethers.getContractFactory("DelaireauxArt");
  const contract = await Contract.deploy(owner, baseTokenURI, maxSupply);
  await contract.waitForDeployment();
  const address = await contract.getAddress();

  for (let i = 0; i < tokenPrices.length; i += PRICE_BATCH_SIZE) {
    const batch = tokenPrices.slice(i, i + PRICE_BATCH_SIZE);
    const tx = await contract.setMintPrices(
      batch.map((item) => item.tokenId),
      batch.map((item) => item.priceWei)
    );
    await tx.wait();
  }

  console.log("Deployed to:", address);
  console.log("Owner set to:", owner);
  console.log("Base token URI:", baseTokenURI || "(empty)");
  console.log("Max supply:", maxSupply.toString());
  console.log("Token prices configured:", tokenPrices.length.toString());
  if (tokenPrices.length > 0) {
    console.log("Pricing file:", resolvePricingFile(pricingFile));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
