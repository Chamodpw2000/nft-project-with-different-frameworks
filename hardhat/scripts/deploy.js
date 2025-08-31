const hre = require("hardhat");

(async ()=>{
    try {

    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    
    const CodingLion = await hre.ethers.getContractFactory("CodingLion");
    const codingLionInstance = await CodingLion.deploy(deployer.address);

    await codingLionInstance.waitForDeployment();
    console.log("CodingLion deployed to:", await codingLionInstance.getAddress());

    }catch(e){
        console.log("Error deploying CodingLion:", e);
        process.exitCode = 1;

    }
})()