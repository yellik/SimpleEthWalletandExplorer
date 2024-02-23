import { ethers } from "../../ethers.min.js";
import { provider } from "../../providers.js";
import { scanProvider } from "../../providers.js";
//append balance and history to the main component
const container = document.querySelector('#main-container');
const accountInput = document.querySelector('#account');
const displayBalance = document.querySelector('#balance');
const totaltrx = document.querySelector('#totaltrx');
const amountInput = document.getElementById('amount')
const toAccountInput = document.querySelector('#toAccount');


let account;
let signer;

export async function checkBalance(account){

    account = accountInput.value;
    const balance = await provider.getBalance(account);
    displayBalance.innerHTML = ethers.utils.formatEther(balance);
    
    const history = await scanProvider.getHistory(account);
    totaltrx.innerHTML = `This account has made ${history.length} transactions`;
    
    const signer = provider.getSigner(account);
        console.log(signer);

    const toAccountInput = document.querySelector('#toAccount');
    console.log(toAccountInput.value);
    console.log(history);
    console.log(history.length);
        if (history.length > 0) {
            console.log(history[0].from
            
                );
        }else{
            console.log('this account has not made any previous transactions');
        }
        
}

export async function displayHistory(transactions){
    for(let trx of transactions){
        console.log(transactions.length);
        console.log(trx);
        console.log(trx.blockNumber);
    }
    
}



export  async function sendTransaction(){
    signer = provider.getSigner(account)
    const trx = await signer.sendTransaction({
        to: toAccountInput.value,
        value: ethers.utils.parseEther(amountInput.value)
    })
    console.log(trx);
}

export async function sendFunds() {
    
    try {
     const amount = parseFloat(amountInput.value) * Math.pow(10, 18)
     let params = [
       {
       from: accountInput.value,
       to: toAccountInput.value,
       value: Number(amount).toString(16),
       gas: Number(21000).toString(16),
       gasPrice: Number(250000).toString(16),
     },
   ];
       //make the transaction
   await ethereum.request({
     method: 'eth_sendTransaction',
     params: params,
   })
    } catch (error) {
      console.log(error);
    }
  }
