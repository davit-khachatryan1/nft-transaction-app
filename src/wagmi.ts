import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { mainnet, sepolia, base } from "wagmi/chains";
import {
  metaMask,
} from "wagmi/connectors";
import { polygonAmoy } from "./chains"; // Import the custom chain

const projectId = "9211cd59958f85a6b25688482536e012";

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, base, polygonAmoy],
    connectors: [
      metaMask({
        dappMetadata: {
          name: "Nft transaction app",
          url: "https://nft-transaction-app.vercel.app/",
        },
      }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      // [mainnet.id]: http(),
      // [sepolia.id]: http(),
      // [base.id]: http(),
      [polygonAmoy.id]: http(), // Add transport for Amoy chain
    },
  });
}
