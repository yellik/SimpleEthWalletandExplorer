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
        displayBalance.innerHTML = ethers.utils.formatEther(balance);

        const history = await scanProvider.getHistory(account);
        totaltrx.innerHTML = `This account has made ${history.length} transactions on Sepolia network.`;

        console.log('Total Transactions on Sepolia:', history.length);

        if (history.length > 0) {
            console.log('Latest transaction from:', history[0].from);
        } else {
            console.log('This account has not made any previous transactions on Sepolia network.');
        }
    } catch (error) {
        console.error('Error checking balance:', error);
    }
}

export async function displayHistory(transactions) {
    for (let trx of transactions) {
        console.log(trx);
        console.log('Block Number:', trx.blockNumber);
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
