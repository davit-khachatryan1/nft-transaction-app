import React, { useState } from "react";
import { useAccount, useChainId, useConnect, useDisconnect } from "wagmi";
import { FaRegCopy } from "react-icons/fa";

import "./walletConnect.css";

function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  // const chainId = useChainId();
  const { disconnect } = useDisconnect();

  const copyToClipboard = (): void => {
    if (address) {
      navigator.clipboard.writeText(address);
      alert("Address copied to clipboard!");
    }
  };

  const handleConnect = async (): Promise<void> => {
    try {
      await connect({ connector: connectors[0] });
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("There was an error connecting to MetaMask. Please try again.");
    }
  };

  return (
    <div className="wallet-connec-container">
      <div className="box">
        {isConnected ? (
          <>
            <button className="disconnect-button" onClick={() => disconnect()}>
              <span className="address">{address}</span>
              <FaRegCopy
                className="copy-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard();
                }}
                style={{ marginLeft: "10px", cursor: "pointer" }}
              />
            </button>
          </>
        ) : (
          <button className="connect-button" onClick={handleConnect}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default WalletConnect;
