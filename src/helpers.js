import  algosdk, { algodClient, myAccount } from './services/algorand';

export const algoRandOperations = () => {
  algodClient
    .accountInformation(myAccount.addr)
    .then(console.log)
    .catch(console.log);

  console.log('---My Account---', myAccount);

  algodClient
    .getTransactionParams()
    .then(params => {
      const receiver = myAccount.addr;
      const note = algosdk.encodeObj("Hello World");
      const txn = {
        "from": myAccount.addr,
        "to": receiver,
        "fee": params.minFee,
        "amount": 1000000,
        "firstRound": params.lastRound,
        "lastRound": params.lastRound + 1000,
        "note": note,
        "genesisID": params.genesisID,
        "genesisHash": params.genesishashb64
      };
      console.log('---My Transaction---', txn);

      const signedTxn = algosdk.signTransaction(txn, myAccount.sk);
      console.log('---Signed Transaction---', signedTxn);

      console.time('Transaction');
      algodClient
        .sendRawTransaction(signedTxn.blob)
        .then(({ txId }) => {
          console.timeEnd('Transaction');
          console.log('---Transaction ID---', txId);
          // algodClient
          //   .transactionInformation(myAccount.addr, txId)
          //   .then(console.log)
          //   .catch(console.log);
        })
        .catch(console.log);
    })
    .catch(console.log);
}
