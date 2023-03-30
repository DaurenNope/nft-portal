const { expect } = require("chai");

describe("Contract", function () {
  let Contract;
  let contract;

  beforeEach(async function () {
    Contract = await ethers.getContractFactory("Contract");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("should create a degree token with metadata", async function () {
    const fullName = "John Doe";
    const dateReceived = "2022-03-27";
    const degreeID = "1234";
    const tokenURI = "https://example.com/metadata";

    const tx = await contract.createDegreeToken(fullName, dateReceived, degreeID, tokenURI);
    await tx.wait();

    expect(await contract.tokenURI(1)).to.equal(tokenURI);
  });
});
