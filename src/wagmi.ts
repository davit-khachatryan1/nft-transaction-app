import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { base, mainnet, sepolia } from "wagmi/chains";
import {
  coinbaseWallet,
  injected,
  metaMask,
  walletConnect,
} from "wagmi/connectors";

const projectId = "9211cd59958f85a6b25688482536e012";

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, base],
    connectors: [
      metaMask({
        dappMetadata: {
          name: "Nft transaction app", 
          url: "https://nft-transaction-app.vercel.app/", 
        },
      }),
      injected(),
      coinbaseWallet(),
      walletConnect({ projectId }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [base.id]: http(),
    },
  });
}

declare module "wagmi" {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}
