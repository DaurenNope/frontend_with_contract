import Web3 from 'web3';

// create a new instance of Web3 with the provider for the Ethereum network
const web3 = new Web3(Web3.givenProvider);

// get the accounts from the Ethereum network
const getAccounts = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
  } catch (error) {
    console.error(error);
  }
};

// send a transaction to the Ethereum network
const sendTransaction = async (to, value) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const txHash = await web3.eth.sendTransaction({
      from: accounts[0],
      to,
      value,
    });
    console.log(`Transaction hash: ${txHash}`);
  } catch (error) {
    console.error(error);
  }
};

export { web3, getAccounts, sendTransaction };
