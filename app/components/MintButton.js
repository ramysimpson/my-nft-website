"use client";

import { useState } from "react";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

// TODO: replace with your contract address and ABI when ready
const CONTRACT_ADDRESS = "";
const CONTRACT_ABI = [];
const FUNCTION_NAME = "mint";

export default function MintButton() {
  const { isConnected } = useAccount();
  const [txError, setTxError] = useState(null);

  const {
    data: txHash,
    isPending,
    writeContract,
  } = useWriteContract({
    mutation: {
      onError: (error) => setTxError(error),
    },
  });

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: txHash,
    });

  const hasContract = CONTRACT_ADDRESS && CONTRACT_ABI.length > 0;
  const canMint = isConnected && hasContract && !isPending && !isConfirming;

  const handleMint = () => {
    setTxError(null);
    if (!hasContract) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: FUNCTION_NAME,
      args: [],
      // value: 0n, // add if your mint requires ETH
    });
  };

  const label = hasContract
    ? isPending
      ? "Confirm in wallet..."
      : isConfirming
      ? "Minting..."
      : isConfirmed
      ? "Minted!"
      : "Mint"
    : "Mint (coming soon)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.35rem",
        maxWidth: "260px",
      }}
    >
      <button
        type="button"
        onClick={handleMint}
        disabled={!canMint}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          borderRadius: "999px",
          border: "1px solid #26263b",
          background: canMint ? "#4f46e5" : "#1b1b28",
          color: "white",
          fontWeight: 600,
          cursor: canMint ? "pointer" : "not-allowed",
          boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
          transition: "transform 120ms ease, opacity 120ms ease",
          opacity: canMint ? 1 : 0.6,
        }}
      >
        {label}
      </button>
      {!hasContract && (
        <span style={{ fontSize: "0.85rem", color: "#9a9ab5" }}>
          Add contract address + ABI to enable mint.
        </span>
      )}
      {txError && (
        <span style={{ fontSize: "0.85rem", color: "#ffb3b3" }}>
          {txError.message || "Transaction failed"}
        </span>
      )}
    </div>
  );
}
