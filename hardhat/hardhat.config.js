require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');
const mnemonicPhrase = fs.readFileSync(".secret").toString().trim();
const infuraProjectId = fs.readFileSync(".infura").toString().trim();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
   sepolia: {
      url: "https://sepolia.infura.io/v3/" + infuraProjectId,
      accounts: {
        mnemonic: mnemonicPhrase,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count:10
      }
    }
  },
  etherscan: {
    apiKey: fs.readFileSync(".etherscan").toString().trim()
  },
  solidity: "0.8.28",
};

//0x36a16690b10EdBf6ab815739D5fa58772f63C0e2
