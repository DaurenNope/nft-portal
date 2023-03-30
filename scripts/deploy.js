const { ethers } = require("hardhat");

async function main() {
  const DegreeToken = await ethers.getContractFactory("Contract");
  const degreeToken = await DegreeToken.deploy();

  console.log("DegreeToken deployed to:", degreeToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
