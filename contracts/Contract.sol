// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Contract is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("DegreeToken", "DT") {}

    function createDegreeToken(string memory fullName, string memory dateReceived, string memory degreeID, string memory _tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
        return newTokenId;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual override(ERC721URIStorage) {
        super._setTokenURI(tokenId, _tokenURI);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
