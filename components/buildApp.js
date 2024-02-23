import { Header } from "./Header.js";
import { checkAccount, sendEth } from "./Main.js";
import { Footer } from './Footer.js'

export function buildApp(){
    console.log('app is loaded');
    Header();

    checkAccount();
    sendEth();

   

    Footer();
   
}
document.addEventListener('DOMContentLoaded', buildApp)




//document.addEventListener('DOMContentLoaded', balanceAndHistory)


 