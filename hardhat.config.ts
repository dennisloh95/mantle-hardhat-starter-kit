import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox"
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    mantle:{
      url:process.env.MANTLE_MAINNET_RPC_URL,
      accounts:[process.env.PRIVATE_KEY!],
    },
    mantleTestnet:{
      url:process.env.MANTLE_TESTNET_RPC_URL,
      accounts:[process.env.PRIVATE_KEY!],
    }
  },
  etherscan:{
    apiKey:process.env.ETHERSCAN_API_KEY,
    customChains:[
      {
        network:"mantle",
        chainId:5000,
        urls:{
          apiURL:`${process.env.MATLE_MAINNET_EXPLORER}api`,
          browserURL:process.env.MATLE_MAINNET_EXPLORER!
        }
      },
      {
        network:"mantleTestnet",
        chainId:5001,
        urls:{
          apiURL:`${process.env.MATLE_TESTNET_EXPLORER}api`,
          browserURL:process.env.MATLE_TESTNET_EXPLORER!
        }
      }
    ]
  }
};

export default config;
