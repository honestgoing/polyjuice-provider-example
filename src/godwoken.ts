// import { PolyjuiceConfig } from "@retric/test-provider/lib/hardhat/wallet-signer";
// import PolyjuiceHttpProvider from "@retric/test-provider";
import { PolyjuiceConfig } from "@polyjuice-provider/core/lib/hardhat/wallet-signer";
import PolyjuiceHttpProvider from "@polyjuice-provider/core";

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

export const polyjuiceHttpProvider = new PolyjuiceHttpProvider(
  polyjuiceConfig.web3RpcUrl,
  polyjuiceConfig.godwokerOption,
  undefined
);
