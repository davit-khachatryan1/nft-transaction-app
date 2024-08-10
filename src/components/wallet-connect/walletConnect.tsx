import { useAccount, useConnect, useDisconnect } from "wagmi";
import { FaRegCopy } from "react-icons/fa";

import "./walletConnect.css";

function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const copyToClipboard = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      alert("Address copied to clipboard!");
    }
  };
  return (
    <div className="wallet-connec-container">
      <div className="box">
        {isConnected ? (
          <>
            <button className="disconnect-button" onClick={() => disconnect()}>
              <span className="address"> {address}</span>
              <FaRegCopy
                className="copy-icon"
                onClick={(e: any) => {
                  e.stopPropagation();
                  copyToClipboard();
                }}
                style={{ marginLeft: "10px", cursor: "pointer" }}
              />
            </button>
          </>
        ) : (
          <button
            className="connect-button"
            onClick={() => connect({ connector: connectors[0] })}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default WalletConnect;
