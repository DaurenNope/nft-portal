const hre = require("hardhat");
const { ethers } = require("hardhat");


async function main() {
  const Contract = await hre.ethers.getContractFactory("Contract");
  const contract = await Contract.deploy();

  await contract.deployed();
  console.log("Contract deployed to:", contract.address);

  const [owner] = await ethers.getSigners();
  console.log("Owner address:", owner.address);

  const fullName = "John Doe";
  const dateReceived = "2023-03-27";
  const degreeID = "BSCS";
  const tokenURI = "ipfs://QmRZKYTZX2nfquUfN6ypKg6iX9csUvD6F7p6xEYK1Wtgma";

  await contract.createDegreeToken(fullName, dateReceived, degreeID, tokenURI);
  console.log("NFT minted successfully!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
