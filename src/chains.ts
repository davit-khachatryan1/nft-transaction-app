export const polygonAmoy = {
  id: 80001,
  name: "Polygon Amoy Testnet",
  network: "polygonAmoy",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.network"],
    },
    public: {
      http: ["https://rpc-amoy.polygon.network"],
    },
  },
  blockExplorers: {
    default: { name: "Polygonscan", url: "https://polygonscan.com" },
  },
  testnet: true,
};
