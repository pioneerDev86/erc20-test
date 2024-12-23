import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    binance: {
      url: `https://bsc-testnet-rpc.publicnode.com`,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
