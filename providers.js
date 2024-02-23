import { ethers } from "./ethers.min.js";

//export const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/9963e6e3427443cbbee6173405b34190');
export const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/9963e6e3427443cbbee6173405b34190');
//export const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545');

export let scanProvider = new ethers.providers.EtherscanProvider();

