import { useState } from "react";
import axios from "axios";

import "./transactionForm.css";

function TransactionForm() {
  const [recipient, setRecipient] = useState<string>("");
  const [data, setData] = useState<string>("");

  const handleSubmit = async (): Promise<void> => {
    try {
      const response = await axios.post(
        "http://localhost:5000/send-transaction",
        {
          recipient,
          customData: data,
        }
      );
      alert(`Transaction Hash: ${response.data.transactionHash}`);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <div className="transaction-wrapper">
      <div className="transaction-box">
        <h2>Send Transaction</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
            <label>Recipient Address</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
            <label>Custom Data</label>
          </div>
          <a href="#" onClick={handleSubmit}>
            Send!!
          </a>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
