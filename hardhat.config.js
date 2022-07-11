require("dotenv").config();
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/e999191b9d5d48c6b93cc277572aa60f",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "",
  },
};
