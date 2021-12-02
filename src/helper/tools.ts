import * as nearAPI from "near-api-js";
import { ConnectConfig } from "near-api-js";
const { keyStores, connect } = nearAPI;
const CONTRACT_NAME = "citytoken.kula.testnet";

const getConfig = (env) => {
  switch (env) {
    case "production":
    case "mainnet":
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.near.org",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org",
      };
    case "development":
    case "testnet":
      return {
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };
    case "betanet":
      return {
        networkId: "betanet",
        nodeUrl: "https://rpc.betanet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.betanet.near.org",
        helperUrl: "https://helper.betanet.near.org",
        explorerUrl: "https://explorer.betanet.near.org",
      };
    case "local":
      return {
        networkId: "local",
        nodeUrl: "http://localhost:3030",
        keyPath: `${process.env.HOME}/.near/validator_key.json`,
        walletUrl: "http://localhost:4000/wallet",
        contractName: CONTRACT_NAME,
      };
    case "test":
    case "ci":
      return {
        networkId: "shared-test",
        nodeUrl: "https://rpc.ci-testnet.near.org",
        contractName: CONTRACT_NAME,
        masterAccount: "test.near",
      };
    case "ci-betanet":
      return {
        networkId: "shared-test-staging",
        nodeUrl: "https://rpc.ci-betanet.near.org",
        contractName: CONTRACT_NAME,
        masterAccount: "test.near",
      };
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`
      );
  }
};

interface NearHandlerConfig extends ConnectConfig {
  contractName: string;
}

export class NearHandler {
  constructor() {}
  //config: NearHandlerConfig;
  //near: Near;
  //wallet: WalletConnection;
  //accountId: string;
  //.contract: Contract;
  //async build() {
  //this.config = getConfig("testnet");
  //const keyStore = new keyStores.InMemoryKeyStore();
  //this.config.keyStore = keyStore;
  //console.log(this.config);
  //this.near = await connect(this.config);
  /*
    this.wallet = new WalletConnection(this.near, null);
    this.accountId = this.wallet.getAccountId();
    this.contract = await new Contract(
      this.wallet.account(),
      this.config.contractName,
      {
        viewMethods: [],
        changeMethods: [],
      }
    );
    */
  //}
}
