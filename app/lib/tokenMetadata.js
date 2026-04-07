import { readFile } from "node:fs/promises";
import path from "node:path";

function getMetadataPath(tokenId) {
  return path.join(process.cwd(), "metadata", String(tokenId));
}

function imageUrlFromMetadataImage(image) {
  if (!image) return null;

  const filename = image.split("/").pop();
  return filename ? `/${filename}` : null;
}

export async function getTokenMetadata(tokenId) {
  const filePath = getMetadataPath(tokenId);
  const raw = await readFile(filePath, "utf8");
  const metadata = JSON.parse(raw);

  return {
    tokenId: Number(tokenId),
    ...metadata,
    localImageUrl: imageUrlFromMetadataImage(metadata.image),
  };
}
