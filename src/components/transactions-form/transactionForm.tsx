import { useState } from "react";
import axios from "axios";
import Loader from "../loader/loader";

import "./transactionForm.css";

function TransactionForm() {
  const [recipient, setRecipient] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_BASE_URL}/send-transaction`,
        {
          recipient,
          customData: data,
        }
      );
      alert(`Transaction Hash: ${response.data.txHash}`);
    } catch (error) {
      console.error("Error sending transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transaction-wrapper">
        {loading && <Loader />}
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
