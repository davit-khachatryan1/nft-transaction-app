import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../loader/loader';
import Modal from '../modal/modal';

import './transactionForm.css'

function TransactionForm() {
  const [recipient, setRecipient] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/send-transaction`,
        {
          recipient,
          customData: data,
        }
      );
      setModalMessage(`Transaction Hash: ${response.data.txHash}`);
    } catch (error) {
      setModalMessage('Error sending transaction: ' + (error as Error).message);
    } finally {
      setLoading(false);
      setModalOpen(true);
    }
  };

  return (
    <div className="transaction-wrapper">
      {loading && <Loader />}
      <div className="transaction-box">
        <h2>Send Transaction</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
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
          <button type="submit">Send!!</button>
        </form>
      </div>
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default TransactionForm;
