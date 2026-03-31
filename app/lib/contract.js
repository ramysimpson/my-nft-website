import { DELAIREAUX_ART_ABI } from "./delaireauxArtAbi";

export const CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

export const CONTRACT_ABI = DELAIREAUX_ART_ABI;

export const ETHEREUM_EXPLORER_URL = CONTRACT_ADDRESS
  ? `https://etherscan.io/address/${CONTRACT_ADDRESS}`
  : "";

export const ETHEREUM_OPENSEA_URL = CONTRACT_ADDRESS
  ? `https://opensea.io/assets/ethereum/${CONTRACT_ADDRESS}`
  : "";
