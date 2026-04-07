import { TOKEN_METADATA } from "./tokenMetadataData.js";

function imageUrlFromMetadataImage(image) {
  if (!image) return null;

  const filename = image.split("/").pop();
  return filename ? `/${filename}` : null;
}

export async function getTokenMetadata(tokenId) {
  const normalizedTokenId = String(tokenId);
  const metadata = TOKEN_METADATA[normalizedTokenId];

  if (!metadata) {
    throw new Error(`Token metadata not found for token ${normalizedTokenId}`);
  }

  return {
    tokenId: Number(normalizedTokenId),
    ...metadata,
    localImageUrl: imageUrlFromMetadataImage(metadata.image),
  };
}
