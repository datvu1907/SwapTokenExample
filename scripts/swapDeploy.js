async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const TokenA = await ethers.getContractFactory("TokenA");
  const tokenA = await TokenA.deploy();

  const TokenB = await ethers.getContractFactory("TokenB");
  const tokenB = await TokenB.deploy();

  const SwapContract = await ethers.getContractFactory("SwapContract");
  const swap = await SwapContract.deploy();
  console.log("Token A address:", tokenA.address);
  console.log("Token B address:", tokenB.address);
  console.log("Swap contract address:", swap.address);

  tokenA.connect(user).approve(swap.address, 10000);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
