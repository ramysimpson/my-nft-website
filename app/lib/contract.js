import { DELAIREAUX_ART_ABI } from "./delaireauxArtAbi";

export const CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

export const CONTRACT_ABI = DELAIREAUX_ART_ABI;

export const SEPOLIA_EXPLORER_URL = CONTRACT_ADDRESS
  ? `https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}`
  : "";

export const SEPOLIA_OPENSEA_URL = CONTRACT_ADDRESS
  ? `https://testnets.opensea.io/assets/sepolia/${CONTRACT_ADDRESS}`
  : "";
