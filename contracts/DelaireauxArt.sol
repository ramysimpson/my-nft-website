// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.6.0
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DelaireauxArt is ERC721, Ownable {
    uint256 public maxSupply;
    uint256 public totalSupply;
    bool public publicMintOpen;
    mapping(uint256 tokenId => uint256 priceWei) public mintPrice;

    string private _baseTokenURI;

    error MintClosed();
    error MaxSupplyReached();
    error InvalidTokenId(uint256 tokenId);
    error TokenAlreadyMinted(uint256 tokenId);
    error TokenPriceNotSet(uint256 tokenId);
    error IncorrectPayment(uint256 expected, uint256 received);
    error MaxSupplyTooLow(uint256 currentSupply, uint256 requestedSupply);
    error ArrayLengthMismatch(uint256 tokenIdsLength, uint256 pricesLength);
    error WithdrawFailed();

    event TokenPriceUpdated(uint256 indexed tokenId, uint256 priceWei);

    constructor(
        address initialOwner,
        string memory baseTokenURI_,
        uint256 maxSupply_
    )
        ERC721("DelaireauxArt", "DART")
        Ownable(initialOwner)
    {
        require(maxSupply_ > 0, "max supply is zero");
        _baseTokenURI = baseTokenURI_;
        maxSupply = maxSupply_;
    }

    function mint(uint256 tokenId) external payable returns (uint256) {
        if (!publicMintOpen) revert MintClosed();
        uint256 price = mintPrice[tokenId];
        if (price == 0) revert TokenPriceNotSet(tokenId);
        if (msg.value != price) {
            revert IncorrectPayment(price, msg.value);
        }
        _mintSpecific(msg.sender, tokenId);
        return tokenId;
    }

    function ownerMint(address to, uint256 tokenId) external onlyOwner returns (uint256) {
        _mintSpecific(to, tokenId);
        return tokenId;
    }

    function setPublicMintOpen(bool isOpen) external onlyOwner {
        publicMintOpen = isOpen;
    }

    function setMintPrice(uint256 tokenId, uint256 newMintPrice) external onlyOwner {
        _setMintPrice(tokenId, newMintPrice);
    }

    function setMintPrices(
        uint256[] calldata tokenIds,
        uint256[] calldata newMintPrices
    ) external onlyOwner {
        uint256 length = tokenIds.length;
        if (length != newMintPrices.length) {
            revert ArrayLengthMismatch(length, newMintPrices.length);
        }

        for (uint256 i = 0; i < length; ++i) {
            _setMintPrice(tokenIds[i], newMintPrices[i]);
        }
    }

    function setMaxSupply(uint256 newMaxSupply) external onlyOwner {
        if (newMaxSupply < totalSupply) {
            revert MaxSupplyTooLow(totalSupply, newMaxSupply);
        }
        if (newMaxSupply < maxSupply) {
            revert MaxSupplyTooLow(maxSupply, newMaxSupply);
        }
        maxSupply = newMaxSupply;
    }

    function setBaseURI(string calldata newBaseTokenURI) external onlyOwner {
        _baseTokenURI = newBaseTokenURI;
    }

    function withdraw(address payable recipient) external onlyOwner {
        (bool success, ) = recipient.call{value: address(this).balance}("");
        if (!success) revert WithdrawFailed();
    }

    function isMinted(uint256 tokenId) external view returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function _mintSpecific(address to, uint256 tokenId) internal {
        if (totalSupply >= maxSupply) revert MaxSupplyReached();
        _validateTokenId(tokenId);
        if (_ownerOf(tokenId) != address(0)) {
            revert TokenAlreadyMinted(tokenId);
        }

        unchecked {
            totalSupply += 1;
        }
        _safeMint(to, tokenId);
    }

    function _setMintPrice(uint256 tokenId, uint256 newMintPrice) internal {
        _validateTokenId(tokenId);
        mintPrice[tokenId] = newMintPrice;
        emit TokenPriceUpdated(tokenId, newMintPrice);
    }

    function _validateTokenId(uint256 tokenId) internal view {
        if (tokenId == 0 || tokenId > maxSupply) {
            revert InvalidTokenId(tokenId);
        }
    }
}
