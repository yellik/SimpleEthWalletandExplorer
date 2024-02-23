import { ethers } from "../../ethers.min.js";
import { provider } from "../../providers.js";


let signer;

export async function sendTransaction(){
    const account = document.querySelector('#account')
    const amountInput = document.getElementById('amount')
    const toAccountInput = document.querySelector('#toAccount');
    const signer = provider.getSigner(account);
        console.log(signer);

    const trx = await signer.sendTransaction({
        to: toAccountInput.value,
        value: ethers.utils.parseEther(amountInput.value)
    })
    console.log(trx);
    
   console.log(signer);
   
}