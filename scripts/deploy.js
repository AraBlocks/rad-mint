const { task } = require("hardhat/config");

task("deploy", "").setAction(async (args, hardhat) => {
  const { ethers } = hardhat;
  const signer = await ethers.getSigner();
  const recipient = signer.address;
  const contractFactory = await ethers.getContractFactory("NFT");
  const contractDeploy = await contractFactory.deploy("NFT", "NFT");//contract constructor arguments
  await contractDeploy.deployed();
  console.log("Deployed contract address:", contractDeploy.address);
});
