export const polygonAmoy = {
  id: 80001, // Replace with the correct Chain ID for Polygon Amoy if needed
  name: "Polygon Amoy Testnet",
  network: "polygonAmoy",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.network"], // Replace with the correct RPC URL for Amoy
    },
    public: {
      http: ["https://rpc-amoy.polygon.network"], // Replace with the correct RPC URL for Amoy
    },
  },
  blockExplorers: {
    default: { name: "Polygonscan", url: "https://polygonscan.com" }, // Adjust URL for Amoy if available
  },
  testnet: true,
};
