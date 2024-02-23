import { ethers } from "../../ethers.min.js";
import { provider, scanProvider } from "../../providers.js";

const container = document.querySelector('#main-container');
const accountInput = document.querySelector('#account');
const displayBalance = document.querySelector('#balance');
const totaltrx = document.querySelector('#totaltrx');
const amountInput = document.getElementById('amount');
const toAccountInput = document.querySelector('#toAccount');

let account;

export async function checkBalance() {
    account = accountInput.value;

    try {
        const balance = await provider.getBalance(account);
        const balanceInEth = ethers.utils.formatEther(balance);
        displayBalance.innerHTML = `This account holds ${balanceInEth} ETH/Sepolia tokens`

        
        const history = await scanProvider.getHistory(account);
       

        totaltrx.innerHTML = `This account has made ${history.length} transactions`;
    
        console.log(history);
        console.log(history.length);
        console.log(history[0].from);
    } catch (error) {
        console.error('Error checking balance:', error);
    }
}



export async function sendTransaction() {
    try {
        const signer = provider.getSigner(account);
        const trx = await signer.sendTransaction({
            to: toAccountInput.value,
            value: ethers.utils.parseEther(amountInput.value)
        });
        console.log('Transaction:', trx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

export async function sendFunds() {
    try {
        const amount = parseFloat(amountInput.value) * Math.pow(10, 18);
        const params = [
            {
                from: accountInput.value,
                to: toAccountInput.value,
                value: Number(amount).toString(16),
                gas: Number(21000).toString(16),
                gasPrice: Number(250000).toString(16),
            },
        ];

        await ethereum.request({
            method: 'eth_sendTransaction',
            params: params,
        });
    } catch (error) {
        console.error('Error sending funds:', error);
    }
}
