import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

// Request access to the user's Ethereum accounts (modern dApps need this)
if (window.ethereum) {
  window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error) => {
    console.error('User denied account access:', error);
  });
} else {
  console.error(
    'MetaMask is not installed. Please install it to use this app.'
  );
}

export default web3;
