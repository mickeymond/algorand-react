import algosdk from 'algosdk';

const server = 'http://40.76.95.3';
const port = '4001';
const token = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const mnemonic = 'sing mosquito ignore spawn skin velvet vast accident code armor vacuum clap pear cliff glimpse crisp will before axis okay client suggest believe ability amateur';

export const algodClient = new algosdk.Algod(token, server, port);

export const myAccount = algosdk.mnemonicToSecretKey(mnemonic);

export default algosdk;
