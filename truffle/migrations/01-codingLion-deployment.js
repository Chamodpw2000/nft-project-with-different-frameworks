const CodingLion = artifacts.require("CodingLion");

module.exports = async function (deployer, network, accounts) {
  const deployerAddress = accounts[0]; // This is usually the first account (the deployer)
  await deployer.deploy(CodingLion, deployerAddress,{from: deployerAddress});
};


