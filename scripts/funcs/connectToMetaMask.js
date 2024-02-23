import { ethers } from "../../ethers.min.js";

const metaButton = document.querySelector('#meta')
export async function connectToMetaMask(){
const provider = new ethers.providers.Web3Provider(window.ethereum)

// MetaMask requests permission to connect users accounts
await provider.send("eth_requestAccounts", []);
if(typeof ethereum === undefined){
    console.log('the browser could not find your Metamask. You can sign up and install it here');

}else{
    console.log('you are connected to Metamask');
}

}

async function getMetaMask() {
    location.href = 'https://metamask.io/';
  }

metaButton.addEventListener('click', connectToMetaMask);
