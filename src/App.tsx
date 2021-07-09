import React, { useEffect, useState } from "react";
import "./App.css";
import { contract, polyjuiceWallet, polyjuiceWeb3HttpProvider, polyjuiceWeb3 } from "./godwoken";

function App() {
  const [scriptHash, setScriptHash] = useState<string>();
  const [encodeArgs, setEncodeArgs] = useState<string>();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getScriptHashByAccountId(0x0);
    ecodeArgs();
    console.log(contract);
  };

  const getScriptHashByAccountId = (id: number) => {
    polyjuiceWeb3HttpProvider.godwoker
      .getScriptHashByAccountId(id)
      .then((result) => {
        console.log(result);
        setScriptHash(result);
      });
  };

  const ecodeArgs = () => {
    const data = polyjuiceWallet.godwoker.encodeArgs({
      from: "",
      to: "",
      gas: "",
      gasPrice: "",
      data: "",
      value: "",
    });
    console.log("ethers ecode data:", data);

    const data2 = polyjuiceWeb3HttpProvider.godwoker.encodeArgs({
      from: "",
      to: "",
      gas: "",
      gasPrice: "",
      data: "",
      value: "",
    });
    console.log("web3 ecode data:", data2);

    if (data === data2) {
      setEncodeArgs(data);
    } else {
      setEncodeArgs(
        "polyjuiceWeb3HttpProvider encodeArgs is not equal to polyjuiceWallet encodeArgs. failed."
      );
    }
  };

  const sendTxWithMetamaskSigning = async () => {
    const to_script_hash = await polyjuiceWeb3HttpProvider.godwoker.getScriptHashByAccountId(0x3); 
    const tx = {
      from: '0xFb2C72d3ffe10Ef7c9960272859a23D24db9e04A',
      to: to_script_hash.slice(0, 42),
      value: '0x00',
      data: '0x00',
      gas: '0x3da0ad',
      gasPrice: '0x00'
    };
    polyjuiceWeb3.eth.sendTransaction(tx).then((result) => {
      console.log(result);
    });
  }

  return (
    <div className="App">
      <header>
        <a
          className="App-link"
          href="https://github.com/jjyr/godwoken-testnet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Godwoken Testnet
        </a>
        <p>Account 0x0 Script Hash: {scriptHash}</p>
        <p>encodeArgs for empty eth tx: {encodeArgs}</p>
        <p>
          <button onClick={sendTxWithMetamaskSigning}>sendTxWithMetamaskSigning</button>
        </p>
      </header>
    </div>
  );
}

export default App;
