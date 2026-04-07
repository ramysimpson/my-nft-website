This folder is ready for Pinata upload as your token metadata folder.

Important: your contract returns `baseTokenURI + tokenId`, so the metadata files in this folder are intentionally named `1`, `2`, `3`, ..., `50` with no `.json` extension.

Before uploading this folder to Pinata:
1. Upload your artwork files to Pinata and note that image folder CID.
2. In every metadata file here, replace `ipfs://bafybeihztwgzyckmchifub66yksnmca6lg6en33gxjlgu27wdqgiy2xv7a/` with your real image folder CID, for example `ipfs://bafy.../`.
3. Upload this `metadata/` folder to Pinata.
4. Set `BASE_TOKEN_URI` to the metadata folder CID with a trailing slash, for example `ipfs://bafy.../`.

Example token URI mapping:
`BASE_TOKEN_URI=ipfs://bafyMetadataCid/`
`tokenURI(1) -> ipfs://bafyMetadataCid/1`

Each metadata file includes:
- `name`
- `description`
- `image`
- `attributes` with `Series`, `Artwork`, `Token ID`, and `Medium`
