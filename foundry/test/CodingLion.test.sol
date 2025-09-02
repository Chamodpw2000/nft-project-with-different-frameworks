pragma solidity ^0.8.21;

import "forge-std/Test.sol";
import "../src/CodingLion.sol";

contract CodingLionTest is Test {
    CodingLion codingLion;

    function setUp() public {
        codingLion = new CodingLion(address(this));
    }

    function testNameIsCodingLion() public {
        assertEq(codingLion.name(), "codingLion");
    }

    function testMintingNFTs() public {
        codingLion.safeMint(msg.sender, "0");
        assertEq(codingLion.ownerOf(0), msg.sender);
        assertEq(
            codingLion.tokenURI(0),
            "https://nft-721-token-coding-lion.vercel.app/0"
        );
    }

    function testNftCreationWrongOwner() public {
        address purchaser = address(0x1);
        vm.startPrank(purchaser);
        vm.expectRevert(
            abi.encodeWithSelector(
                Ownable.OwnableUnauthorizedAccount.selector,
                purchaser
            )
        );
        codingLion.safeMint(purchaser, "0");
        vm.stopPrank();
    }

    function testNftBuyToken() public {
        address purchaser = address(0x123);
        vm.startPrank(purchaser);
        codingLion.buyToken("0");
        vm.stopPrank();
        assertEq(codingLion.ownerOf(0), purchaser);
    }
}

// The -vvvv option in forge test -vvvv increases the verbosity of the test output.

// Each v stands for "verbose".
// More vs means more detailed output.
// -v = basic info, -vv = more info, -vvv = even more, -vvvv = maximum detail (includes all logs, traces, debug info).
// Use -vvvv to see everything about your test execution, which is helpful for debugging.

// VM pranking is a Forge testing feature that lets you simulate transactions from any address in your tests.

// With vm.startPrank(address), all subsequent contract calls are made as if they are sent from that address, not the default test contract.
// This is useful for testing access control, permissions, and multi-user scenarios.

// You stop pranking with vm.stopPrank().
// Example:

// vm.startPrank(user);
// contract.doSomething(); // runs as 'user'
// vm.stopPrank();

// This helps you test how your contract behaves for different users.
