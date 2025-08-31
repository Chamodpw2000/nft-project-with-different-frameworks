import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("CodingLion", function () {
  async function deployCodingLionAndMintTokenFixture(){
     const [owner, otherAccounts] = await ethers.getSigners();
    const CodingLion = await hre.ethers.getContractFactory("CodingLion");
    const codingLionInstance = await CodingLion.deploy(owner.address);
    await codingLionInstance.safeMint(otherAccounts.address, "https://nft-721-token-coding-lion.vercel.app/0");
return {codingLionInstance};
  }
  it("should mint a new NFT", async function () {
    const [owner, otherAccounts] = await ethers.getSigners();



    const {codingLionInstance} = await loadFixture(deployCodingLionAndMintTokenFixture);
    expect(await codingLionInstance.ownerOf(0)).to.equal(otherAccounts.address);
  });






  it("fails to transfer tokens from the wrong addresses" , async()=>{
    const [owner, otherAccounts , notTheNFTOwner] = await ethers.getSigners();



    const {codingLionInstance} = await loadFixture(deployCodingLionAndMintTokenFixture);
    await expect(
  codingLionInstance.connect(notTheNFTOwner).transferFrom(owner.address, otherAccounts.address, 0)
).to.be.revertedWithCustomError(codingLionInstance, "ERC721InsufficientApproval");
  })
});

