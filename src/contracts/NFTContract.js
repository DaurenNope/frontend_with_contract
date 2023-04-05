import ABI from "../contracts/ABI"
const { ethers } = require("ethers");


const CONTRACT_ADDRESS = '0xf742648161ad065d013d52251301a23a0f6f87cf'; 
const NETWORK = 'goerli'; 
const INFURA_API_KEY = '61b8fe5c3cc94a53a7333de0b4febd3c';

const provider = new ethers.providers.InfuraProvider(NETWORK, INFURA_API_KEY);

const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

export default contract;