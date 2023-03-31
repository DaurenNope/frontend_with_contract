import { ethers } from 'ethers';
import ABI from "../contracts/ABI"


const CONTRACT_ADDRESS = '0x88135619fc0778AF0F20cE5f52F575636F204935'; 
const NETWORK = 'goerli'; 
const INFURA_API_KEY = 'https://goerli.infura.io/v3/c5d9e93234d445308b51109fab8738f3';

const provider = new ethers.providers.InfuraProvider(NETWORK, INFURA_API_KEY);

const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

export default contract;
