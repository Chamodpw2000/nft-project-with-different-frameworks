const CodingLion = artifacts.require("CodingLion");
const truffleAssert = require("truffle-assertions");
contract("CodingLion", (accounts)=>{
    it("should credit an NFT to a specific account", async()=>{
        const codingLionInstance = await CodingLion.deployed();
        let txResult = await codingLionInstance.safeMint(accounts[1],"CodingLion.json");
        // assert.equal(txResult.logs[0].event, "Transfer", "Transfer event was not emitted");
        // assert.equal(txResult.logs[0].args.from, "0x0000000000000000000000000000000000000000", "NFT was not minted from the zero address");
        truffleAssert.eventEmitted(txResult, 'Transfer', {from:"0x0000000000000000000000000000000000000000", to: accounts[1],tokenId: web3.utils.toBN(0)}, "Transfer event was not emitted correctly");
        // assert.equal(await codingLionInstance.ownerOf(0),accounts[1], "NFT was not credited to the correct account");

        
    })
})
