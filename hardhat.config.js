  require("@nomicfoundation/hardhat-toolbox");
  require('dotenv').config()
  require("@nomiclabs/hardhat-ethers");

  /** @type import('hardhat/config').HardhatUserConfig */
  module.exports = {
    solidity: "0.8.18",
    networks: {
      goerli: {
        url: "https://goerli.infura.io/v3/c5d9e93234d445308b51109fab8738f3",
        accounts: {
          mnemonic: "hold antique square embrace ozone citizen beauty tunnel regular help crane casino",
          gasPrice: 20000000000, // Adjust this value according to your needs
        },
        etherscan: {
          apiKey: {
            goerli: '7H5BQD4CAY2PT3BXFBGN5SI242P4TF6SNM'
          }    
        },
        development: {
          accounts: { count: 10 }, // Number of accounts to use in testing
        },
        localhost: {
          url: "http://localhost:8545", // Default URL for Hardhat Network
        },
        ethers: {
          // The network you're connecting to
          // This example is for connecting to the local Hardhat network
          // Replace the network name with the one you're using
          url: "http://localhost:8545"
        },    
      },
    },
  };
