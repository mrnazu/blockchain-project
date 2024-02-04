// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19;

contract Map{
    bytes32 private passwordHash;
    string public basicMap;
    string public tailorMap;

    constructor(string memory userPassword){      
        passwordHash = keccak256(abi.encodePacked(userPassword));
    }

    function setMaps(string memory userPassword, string memory newBasicMaps, string memory newTailorMpas) public {
        bytes32 HashedPassword = keccak256(abi.encodePacked(userPassword));

        if(passwordHash == HashedPassword){
            basicMap = newBasicMaps;
            tailorMap = newTailorMpas;
        }
    }
}