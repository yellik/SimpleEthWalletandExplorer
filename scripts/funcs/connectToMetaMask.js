import { ethers } from "../../ethers.min.js";

const metaButton = document.querySelector('#meta')
export async function connectToMetaMask(){
const provider = new ethers.providers.Web3Provider(window.ethereum)

// MetaMask requests permission to connect users accounts
await provider.send("eth_requestAccounts", []);
if (typeof window.ethereum !== 'undefined') {
    // Check if the user is connected to MetaMask
    if (window.ethereum.isConnected()) {
      alert('You have been signed into MetaMask!');
    } else {
      alert('You are not signed into MetaMask. Please sign in.');
    }
  } else {
    alert('MetaMask is not installed. Please install MetaMask and try again.');
  }


}

async function getMetaMask() {
    location.href = 'https://metamask.io/';
  }

  
   

metaButton.addEventListener('click', connectToMetaMask);
