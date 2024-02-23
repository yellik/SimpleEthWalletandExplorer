import { connectToMetaMask } from "../scripts/funcs/connectToMetaMask.js";

export function Header(){
    const container = document.querySelector('.container')
    const metaButton = document.querySelector('#meta')
    const header = document.createElement('div');
    const greeting = document.createElement('div')
    
    
    header.setAttribute('class', 'header')
    greeting.setAttribute('id', 'greeting')
   
    
    container.appendChild(header);
    header.appendChild(greeting)
    header.appendChild(metaButton)
    
    greeting.innerHTML='Hello stranger. Welcome to the Web3 hub. '
    
}   