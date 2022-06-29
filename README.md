# rad-mint

Deploy and verify contract for mint feature on app.rad.live

```
$ cp .env.example .env
$ npm install
$ npx hardhat compile
$ npx hardhat deploy --network rinkeby
$ npx hardhat verify --network rinkeby <DeployedContractAddress> NFT NFT
$ git commit -a -n -m "deployed on rinkeby"
```

```
Deployed contract address: 0xd3d379317eD3f774f779E3F1055BE352fb564C43
Successfully verified contract NFT on Etherscan.
https://rinkeby.etherscan.io/address/0xd3d379317eD3f774f779E3F1055BE352fb564C43#code
```

```
$ npx hardhat clean
$ npx hardhat compile
$ npx hardhat deploy --network ethereum
$ npx hardhat verify --network ethereum <DeployedContractAddress> NFT NFT
$ git commit -a -n -m "deployed on ethereum"
```

```
Error: insufficient funds for intrinsic transaction cost [ See: https://links.ethers.org/v5-errors-INSUFFICIENT_FUNDS ] (error={"name":"ProviderError","code":-32000,"_isProviderError":true}, method="sendTransaction", transaction=undefined, code=INSUFFICIENT_FUNDS, version=providers/5.6.8)
    at Logger.makeError (C:\Documents\code10\rad-mint\node_modules\@ethersproject\logger\src.ts\index.ts:261:28)
...
```
