# NFT Transaction App

## Overview

The NFT Transaction App is a frontend application designed to interact with the Polygon Amoy testnet. It allows users to connect their wallet and send transactions directly from the web interface. The application is built with React and Next.js, and utilizes the wagmi library for wallet integration and blockchain interactions.

## Architecture

- **Frontend**: The frontend is developed using React and Next.js, providing a user interface for wallet connection and transaction submission.
- **Blockchain**: The application interacts with the Polygon Amoy testnet for transaction processing. It does not include backend functionality, assuming the existence of a backend service that handles transactions.

## Setup and Installation

npm install

Run:
npm run dev

Build:
npm run build

### Prerequisites

- **Node.js**: v18 or later
- **npm**: Package manager to install dependencies
- **A modern browser**: For running the application (e.g., Chrome, Firefox)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/davit-khachatryan1/nft-transaction-app.git
   cd nft-transaction-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

4. **Build for production:**

   ```bash
   npm run build
   ```

   This command creates an optimized production build of your application in the `.next` directory.
