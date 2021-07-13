# @polyjuice-provider react test example

this project is a simple react dapp example used to test with [@polyjuice-provider](https://github.com/nervosnetwork/polyjuice-provider) module.

you should create a `.env` file before running this project. (due to React's env variable issue, the extra `REACT_APP_` prefix is required)

```sh
cat > ./.env <<EOF
REACT_APP_WEB3_JSON_RPC=<godwoken web3 rpc>
REACT_APP_ROLLUP_TYPE_HASH=<godwoken rollup type hash>
REACT_APP_ETH_ACCOUNT_LOCK_CODE_HASH=<eth account lock code hash>
REACT_APP_PRIVATE_KEY=<your eth test private key, do not use in production>
REACT_APP_ETH_ADDRESS=<your eth test address, match with private_key above>
EOF
```
