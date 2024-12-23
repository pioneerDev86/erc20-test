// scripts/deploy.js
import { ethers } from 'hardhat';

const main = async () => {
  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const FunToken = await ethers.getContractFactory('FunToken');

  // Deploy the contract
  console.log('Deploying FunToken...');
  const funToken = await FunToken.deploy();
  await funToken.waitForDeployment();
  console.log(`FunToken deployed to: ${await funToken.getAddress()}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
