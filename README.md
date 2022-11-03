# rad-mint

Deploy and verify contract for mint feature on app.rad.live

```
$ cp .env.example .env
$ npm install
$ npx hardhat compile
$ npx hardhat deploy --network goerli
$ npx hardhat verify --network goerli <DeployedContractAddress> NFT NFT
$ git commit -a -n -m "deployed on goerli"
```

```
Deployed contract address: 0xd3d379317eD3f774f779E3F1055BE352fb564C43
Successfully verified contract NFT on Etherscan.
https://goerli.etherscan.io/address/0xd3d379317eD3f774f779E3F1055BE352fb564C43#code
```

```
$ npx hardhat clean
$ npx hardhat compile
$ npx hardhat deploy --network ethereum
$ npx hardhat verify --network ethereum <DeployedContractAddress> NFT NFT
$ git commit -a -n -m "deployed on ethereum"
```

```
Deployed contract address: 0x64D58eB826EaF719ea4C1409Ec1c32EC84fF060A
Successfully verified contract NFT on Etherscan.
https://etherscan.io/address/0x64D58eB826EaF719ea4C1409Ec1c32EC84fF060A#code
```
