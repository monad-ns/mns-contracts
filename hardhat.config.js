require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-etherscan");
require('hardhat-deploy');

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
    solidity: {
        compilers: [
          {
            version: "0.8.20",
            settings: {
              optimizer: {
                enabled: true,
                runs: 200
              }
            }
          }
        ]
    },
    paths: {
        artifacts: "./src",
    },
    networks: {
        monad: {
            url: "https://testnet-rpc.monad.xyz",
            accounts: [process.env.DEPLOYER_PRIVATE_KEY],
        },
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [process.env.DEPLOYER_PRIVATE_KEY],
            allowUnlimitedContractSize: true
        }
    },
    sourcify: {
      enabled: false
    },
    etherscan: {
        apiKey: process.env.ETHER_SCAN_API_KEY,
        customChains: [
          {
            network: "monad",
            chainId: 42766,
            urls: {
              apiURL: "https://testnet-rpc.monad.xyz/api/?module=contract&action=verify",
              browserURL: "https://testnet.monadexplorer.com/"
            }
          }
        ]
    },
};