import { sendTransaction } from "../scripts/funcs/sendTransaction.js"

/*
const createMainContainer = () => {
    const wrapper = document.querySelector('.container');
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-container-wrap')
    wrapper.appendChild(mainContainer)
}
*/
const container = document.querySelector('.container');



export async function checkAccount(){
    //creates the check balance div
    const otherWalletInfo = document.createElement('p');
    const otherWallet = document.createElement('div');
    
    
    const account = document.querySelector('#account');
    const balance = document.querySelector('#balance');
    const balanceButton = document.querySelector('#checkBalance')
    //div to display balance and history 
    const balanceAndHistory = document.createElement('div');
    const history = document.querySelector('#totaltrx');
    
    
    
    //wallet check button for non-metamask users
    otherWalletInfo.setAttribute('id', 'info');
    otherWallet.setAttribute('id', 'other-wallet');
    balanceAndHistory.setAttribute('id', 'balance-history');

    //a div for checking wallet without metamask
    otherWalletInfo.innerHTML = `No Metamask? Use the field below for Sepholia public key or Ganache`;
    //append the info and the account input to the main-container
    container.appendChild(otherWalletInfo);
    container.appendChild(otherWallet);
    
    //checking that the div appended correctly
    console.log(otherWallet);
    //append account input and the button to the above created divs
    otherWallet.appendChild(account);
    otherWallet.appendChild(balanceButton)

    container.appendChild(balanceAndHistory)
    
    balanceAndHistory.appendChild(balance);
    balanceAndHistory.appendChild(history);
    
}

export async function sendEth(){
    //wallet div - transfers accounts
    const sendEthDiv = document.createElement('div');
    
    const amount = document.querySelector('#amount');
    const toAccount = document.querySelector('#toAccount');
    const sendTrxButton = document.querySelector('#sendTrx');
    const signWithMeta = document.querySelector('#signWithMeta')


    sendEthDiv.setAttribute('id', 'send-trx');

    container.appendChild(sendEthDiv);
    sendEthDiv.appendChild(amount);
    sendEthDiv.appendChild(toAccount);
    sendEthDiv.appendChild(sendTrxButton);
    sendEthDiv.appendChild(signWithMeta);
}

