pragma solidity ^0.8.21;

import "forge-std/Script.sol";
import "../src/CodingLion.sol";

contract CodingLionScript is Script {
    function setUp() public {}

    function run() public {
       string memory seedPhrase = vm.readFile(".secret");
       uint256 privateKey = vm.deriveKey(seedPhrase, 0);
       vm.startBroadcast(privateKey);
CodingLion codingLion = new CodingLion(msg.sender);
       vm.stopBroadcast();
    }
}
