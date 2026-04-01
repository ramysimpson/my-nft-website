"use client";

import { useReadContract } from "wagmi";
import { mainnet } from "wagmi/chains";
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  getEthereumOpenSeaAssetUrl,
} from "../lib/contract";

const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

export default function TokenMintedLinks({ tokenId, buttonBase }) {
  const hasContract = Boolean(CONTRACT_ADDRESS);
  const contractAddress = hasContract ? CONTRACT_ADDRESS : EMPTY_ADDRESS;
  const hasTokenId = typeof tokenId === "number";

  const { data: isMinted } = useReadContract({
    address: contractAddress,
    abi: CONTRACT_ABI,
    chainId: mainnet.id,
    functionName: "isMinted",
    args: hasTokenId ? [BigInt(tokenId)] : undefined,
    query: {
      enabled: hasContract && hasTokenId,
    },
  });

  if (!isMinted) {
    return null;
  }

  return (
    <>
      <a
        className="secondary-links"
        href={`/token/${tokenId}`}
        style={{
          ...buttonBase,
          background: "#0f0f18",
          textDecoration: "none",
        }}
      >
        View Token Page
      </a>
      <a
        className="secondary-links"
        href={getEthereumOpenSeaAssetUrl(tokenId)}
        target="_blank"
        rel="noreferrer"
        style={{
          ...buttonBase,
          background: "#0f0f18",
          textDecoration: "none",
        }}
      >
        View on OpenSea
      </a>
    </>
  );
}
