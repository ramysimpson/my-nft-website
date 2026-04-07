import { NextResponse } from "next/server";
import { getTokenMetadata } from "../../../lib/tokenMetadata";

export async function GET(_request, { params }) {
  try {
    const { tokenId } = await params;
    const metadata = await getTokenMetadata(tokenId);
    return NextResponse.json(metadata);
  } catch {
    return NextResponse.json(
      { error: "Token metadata not found" },
      { status: 404 }
    );
  }
}
