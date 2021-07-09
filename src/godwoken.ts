import { PolyjuiceConfig, PolyjuiceWallet, PolyjuiceJsonRpcProvider } from "@polyjuice-provider/ethers";
import { PolyjuiceHttpProvider } from "@polyjuice-provider/web3";
import { ContractFactory } from "ethers";
import Web3 from 'web3';

export const privateKey = "0x1473ec0e7c507de1d5c734a997848a78ee4d30846986d6b1d22002a57ece74ba";

export const polyjuiceConfig: PolyjuiceConfig = {
  godwokerOption: {
    godwoken: {
      rollup_type_hash:
        "0x9b260161e003972c0b699939bc164cfdcfce7fd40eb9135835008dd7e09d3dae",
      eth_account_lock: {
        code_hash:
          "0xfcf093a5f1df4037cea259d49df005e0e7258b4f63e67233eda5b376b7fd2290",
        hash_type: "type"
      }
    }
  },
  web3RpcUrl: "https://godwoken-testnet-web3-rpc.ckbapp.dev"
};

export const polyjuiceJsonRpcProvider = new PolyjuiceJsonRpcProvider(
  polyjuiceConfig.godwokerOption,
  [], // your abi items array
  polyjuiceConfig.web3RpcUrl
);
export const polyjuiceWallet = new PolyjuiceWallet(privateKey, polyjuiceConfig, polyjuiceJsonRpcProvider);

export const contract = new ContractFactory(
  [],
  '',
  polyjuiceWallet,
);

export const polyjuiceWeb3HttpProvider = new PolyjuiceHttpProvider(polyjuiceConfig.web3RpcUrl, polyjuiceConfig.godwokerOption, []);
export const polyjuiceWeb3 = new Web3(polyjuiceWeb3HttpProvider);


