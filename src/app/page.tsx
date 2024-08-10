"use client";

import TransactionForm from "@/components/transactions-form/transactionForm";
import WalletConnect from "@/components/wallet-connect/walletConnect";

import './index.css'

export default function Page() {
  return (
    <div className="container">
      <WalletConnect />
      <TransactionForm />
    </div>
  );
}
