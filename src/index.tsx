import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { polyjuiceWallet, polyjuiceWeb3HttpProvider } from "./godwoken"

polyjuiceWallet.godwoker
  .getScriptHashByAccountId(0x0)
  .then((result) => console.log(result));

const data = polyjuiceWallet.godwoker.encodeArgs({
  from: '',
  to: '',
  gas: '',
  gasPrice: '',
  data: '',
  value: '',
});
console.log('ethers ecode data:', data);

polyjuiceWeb3HttpProvider.godwoker
  .getScriptHashByAccountId(0x0)
  .then((result) => console.log(result));

const data2 = polyjuiceWeb3HttpProvider.godwoker.encodeArgs({
  from: '',
  to: '',
  gas: '',
  gasPrice: '',
  data: '',
  value: '',
});
console.log('web3 ecode data:', data2);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
