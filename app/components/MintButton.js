"use client";

import { useState } from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { mainnet } from "wagmi/chains";
import { formatEther } from "viem";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../lib/contract";

const FUNCTION_NAME = "mint";
const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

export default function MintButton({ selectedTokenId, selectedTitle }) {
  const { isConnected } = useAccount();
  const [txError, setTxError] = useState(null);
  const hasContract = Boolean(CONTRACT_ADDRESS);
  const contractAddress = hasContract ? CONTRACT_ADDRESS : EMPTY_ADDRESS;
  const hasSelection = typeof selectedTokenId === "number";

  const readOptions = {
    address: contractAddress,
    abi: CONTRACT_ABI,
    chainId: mainnet.id,
    query: {
      enabled: hasContract,
    },
  };

  const {
    data: mintPrice,
    error: mintPriceError,
    isLoading: mintPriceLoading,
  } = useReadContract({
    ...readOptions,
    functionName: "mintPrice",
    args: hasSelection ? [BigInt(selectedTokenId)] : undefined,
    query: {
      enabled: hasContract && hasSelection,
    },
  });

  const { data: publicMintOpen } = useReadContract({
    ...readOptions,
    functionName: "publicMintOpen",
  });

  const { data: totalSupply } = useReadContract({
    ...readOptions,
    functionName: "totalSupply",
  });

  const { data: maxSupply } = useReadContract({
    ...readOptions,
    functionName: "maxSupply",
  });

  const { data: selectedTokenMinted } = useReadContract({
    ...readOptions,
    functionName: "isMinted",
    args: hasSelection ? [BigInt(selectedTokenId)] : undefined,
    query: {
      enabled: hasContract && hasSelection,
    },
  });

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

  const soldOut =
    typeof totalSupply === "bigint" &&
    typeof maxSupply === "bigint" &&
    totalSupply >= maxSupply;

  const selectedAlreadyMinted = Boolean(selectedTokenMinted);
  const tokenPriceReadFailed = Boolean(mintPriceError);
  const hasTokenPrice = typeof mintPrice === "bigint" && mintPrice > 0n;

  const canMint =
    isConnected &&
    hasContract &&
    hasSelection &&
    hasTokenPrice &&
    publicMintOpen &&
    !selectedAlreadyMinted &&
    !soldOut &&
    !isPending &&
    !isConfirming;

  const handleMint = () => {
    setTxError(null);
    if (!hasContract || !hasSelection) return;

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      chainId: mainnet.id,
      functionName: FUNCTION_NAME,
      args: [BigInt(selectedTokenId)],
      value: mintPrice ?? 0n,
    });
  };

  const label = hasContract
    ? isPending
      ? "Confirm in wallet..."
      : isConfirming
      ? "Minting..."
      : isConfirmed
      ? "Minted!"
      : !hasSelection
      ? "Select Artwork"
      : mintPriceLoading
      ? "Loading Price..."
      : tokenPriceReadFailed
      ? "Price Error"
      : !hasTokenPrice
      ? "Price Unavailable"
      : selectedAlreadyMinted
      ? "Already Minted"
      : soldOut
      ? "Sold Out"
      : publicMintOpen
      ? `Mint Token #${selectedTokenId}`
      : "Mint"
    : "Mint Unavailable";

  const helperText = !hasContract
    ? "Set NEXT_PUBLIC_CONTRACT_ADDRESS to enable minting."
    : !hasSelection
    ? "Choose an artwork from the gallery before minting."
    : mintPriceLoading
    ? `Loading Token #${selectedTokenId} price from Ethereum...`
    : tokenPriceReadFailed
    ? `Unable to read Token #${selectedTokenId} price from Ethereum. Refresh and try again.`
    : !hasTokenPrice
    ? `Set a price for Token #${selectedTokenId} before opening mint.`
    : selectedAlreadyMinted
    ? `Token #${selectedTokenId} has already been minted.`
    : soldOut
    ? "Collection is fully minted."
    : publicMintOpen
    ? `Selected: ${selectedTitle} • Price: ${formatEther(mintPrice ?? 0n)} ETH`
    : `Selected: ${selectedTitle} • Price: ${formatEther(mintPrice ?? 0n)} ETH • Public mint is currently closed.`;

  const supplyText =
    typeof totalSupply === "bigint" && typeof maxSupply === "bigint"
      ? `${totalSupply.toString()} / ${maxSupply.toString()} minted`
      : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.45rem",
        maxWidth: "320px",
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
      <span style={{ fontSize: "0.85rem", color: "#9a9ab5" }}>
        {helperText}
      </span>
      {supplyText && (
        <span style={{ fontSize: "0.85rem", color: "#b9bdd6" }}>
          {supplyText}
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
