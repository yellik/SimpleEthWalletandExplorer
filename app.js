import { ethers } from "./ethers.min.js";
import { provider } from "./providers.js";
import { checkBalance, sendFunds, sendTransaction } from "./scripts/funcs/CheckBalance.js";
import { connectToMetaMask } from "./scripts/funcs/connectToMetaMask.js";
import { highlightElements } from "./scripts/funcs/userAlerts.js";
import { buildApp } from "./components/buildApp.js";

const checkBalanceButton = document.querySelector('#checkBalance');
const sendTrxButton = document.querySelector('#sendTrx');
const metaConnectButton = document.querySelector('#meta')
const signwithMetaButton = document.querySelector('#signWithMeta')




const initApp = () =>  { console.log(ethers) }




document.addEventListener('DOMContentLoaded', initApp);
metaConnectButton.addEventListener('click', connectToMetaMask);
sendTrxButton.addEventListener('click', sendTransaction)
checkBalanceButton.addEventListener('click', checkBalance);
signwithMetaButton.addEventListener('click', sendFunds)
metaConnectButton.addEventListener('mouseover', highlightElements)