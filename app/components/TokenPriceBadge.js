"use client";

import { useReadContract } from "wagmi";
import { mainnet } from "wagmi/chains";
import { formatEther } from "viem";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../lib/contract";

const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

export default function TokenPriceBadge({ tokenId }) {
  const hasContract = Boolean(CONTRACT_ADDRESS);

  const { data: mintPrice, isLoading } = useReadContract({
    address: hasContract ? CONTRACT_ADDRESS : EMPTY_ADDRESS,
    abi: CONTRACT_ABI,
    chainId: mainnet.id,
    functionName: "mintPrice",
    args: [BigInt(tokenId)],
    query: {
      enabled: hasContract,
    },
  });

  const label = isLoading
    ? "Loading..."
    : typeof mintPrice === "bigint" && mintPrice > 0n
    ? `${formatEther(mintPrice)} ETH`
    : "Price unavailable";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.25rem 0.6rem",
        borderRadius: "999px",
        border: "1px solid rgba(124,116,255,0.45)",
        background: "rgba(79,70,229,0.14)",
        color: "#d9d6ff",
        fontSize: "0.78rem",
        fontWeight: 600,
        letterSpacing: "0.01em",
      }}
    >
      {label}
    </span>
  );
}
