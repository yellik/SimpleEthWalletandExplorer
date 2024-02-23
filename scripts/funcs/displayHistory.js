import { ethers } from "../../ethers.min.js"
import { checkBalance } from "./CheckBalance.js";
import { provider } from "../../providers.js";
import { scanProvider } from "../../providers.js";
import { accountInput } from "./CheckBalance.js";


export async function historyDisplay(account){
    
    const history = await scanProvider.getHistory(account);
    const numberOfTransactions = await provider.getTransactionCount(account);
    totaltrx.innerHTML = `This account has made ${history.length} transactions`;
    
    console.log(numberOfTransactions);
    console.log(history);
    console.log(history.length);
    console.log(history[0].from);
}

    

