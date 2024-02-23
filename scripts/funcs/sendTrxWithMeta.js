async function sendFunds() {
    
    try {
     const amount = parseFloat(valueInput.value) * Math.pow(10, 18)
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