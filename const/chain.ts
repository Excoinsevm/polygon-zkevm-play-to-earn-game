import { Chain } from "@thirdweb-dev/chains";

const defineChain: Chain = {
  chain: "bitrock Mainnet",
  name: "bitrock",
  chainId: 7171,
  rpc: ["https://connect.bit-rock.io"], // Change this to an array
  nativeCurrency: {
    name: "Bitrock",
    symbol: "BROCK",
    decimals: 18,
  },
  shortName: "bitrock",
  testnet: false,
  slug: "bitrock",
};

export default defineChain;
