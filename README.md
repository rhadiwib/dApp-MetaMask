# dApp Price Widget

A decentralized application that serves as a price widget for dApp, providing real-time cryptocurrency price data in a clean, responsive interface with wallet connectivity.

![MetaMask Logo](https://images.ctfassets.net/clixtyxoaeas/1ezuBGezqfIeifWdVtwU4c/d970d4cdf13b163efddddd5709164d2e/MetaMask-icon-Fox.svg "width=200")

## Features

- **Real-time Cryptocurrency Price Display**: View up-to-date prices for various cryptocurrencies sourced directly from the Energiswap API.
- **Sortable Data Table**: Easily sort cryptocurrencies by name, symbol, or price with a responsive and interactive table.
- **MetaMask Integration**: Seamlessly connect your MetaMask wallet to view your token balances.
- **Dark/Light Theme Toggle**: Switch between visually comfortable dark and light modes to suit your preference.
- **Responsive Design**: Optimized UI for all device sizes, from mobile to desktop.

## Technology Stack

- **Frontend Framework**: React with TypeScript for type safety and better developer experience
- **Build Tool**: Vite for lightning-fast development and optimized builds
- **State Management**: Zustand for simple, efficient global state
- **API Integration**: TanStack Query (React Query) for data fetching with caching
- **Web3 Connectivity**: Wagmi + Viem for simplified Ethereum interactions
- **Styling**: Tailwind CSS for utility-first styling with dark mode support
- **UI Components**: Shadcn/UI for accessible, customizable components
- **Table Management**: TanStack Table for advanced table features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- MetaMask browser extension (for wallet connectivity)

### Installation

1. Install dependencies:
   ```bash
   yarn
   ```

2. Start the development server:
   ```bash
   yarn start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Usage

### Home

The Home page displays a sortable table of cryptocurrencies with the following information:
- Name
- Current price in USD (formatted)

Click on any column header to sort the table by that column.

## 🌟 Features

- **📊 Real-Time Price Tracking**  
  View up-to-date cryptocurrency prices from the Energiswap API
- **🗂️ Interactive Data Table**  
  Sort tokens by name, symbol, or price with instant feedback
- **🦊 MetaMask Integration**  
  Connect your wallet to view balances in both native tokens and USD
- **🌙 Theme Flexibility**  
  Toggle between eye-friendly dark and light modes
- **📱 Responsive Design**  
  Optimized for all screen sizes from mobile to desktop

## 🛠️ Technology Stack

| Category           | Technology               | Purpose                                  |
|--------------------|--------------------------|------------------------------------------|
| **Framework**      | React + TypeScript       | Component-based UI development           |
| **Build Tool**     | Vite                     | Lightning-fast development server        |
| **State Management**| Zustand                 | Simple global state management           |
| **Data Fetching**  | TanStack Query           | Efficient API data handling              |
| **Web3**           | Wagmi + Viem            | Ethereum blockchain interactions         |
| **Styling**        | Tailwind CSS            | Utility-first styling system             |
| **UI Components**  | Shadcn/UI               | Accessible pre-built components          |
| **Table Logic**    | TanStack Table          | Advanced data table functionality        |


### Wallet

The Wallet page provides MetaMask connectivity:
1. Click "Connect wallet" to connect your MetaMask account
2. Once connected, view your wallet address and token balance
3. Balance is displayed in both the native token and USD equivalent value

for more detail please refer to `demo` directory.

### Theme Toggle

Switch between dark and light modes using the toggle button in the top-right corner of the application.

## Development

### Available Commands

- `yarn start` - Start the development server
- `yarn build` - Build the production version
- `yarn preview` - Preview the built application
- `yarn test` - Run tests (if configured)

#### Custom Styling

This project uses Tailwind CSS for styling. To customize the theme:

1. Modify the theme variables in `tailwind.config.js`
2. Adjust dark/light mode variables in `index.css`

## API Integration

The application connects to the Energiswap API to fetch current price data:

- API Endpoint: `https://api.energiswap.exchange/v1/assets`
- Response Format: JSON object with token addresses as keys

## Acknowledgments
- [MetaMask](https://metamask.io/developer/sdk) for metamask developer SDK
- [Energiswap](https://app.energiswap.exchange) for providing the API
- [Shadcn/UI](https://ui.shadcn.com/) for the beautiful component library
- [TanStack](https://tanstack.com/) for Query and Table libraries
- [Wagmi](https://wagmi.sh/) for simplified Ethereum interactions
- [Ethers](https://docs.ethers.org/v6/) The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.
- [https://docs.web3js.org/] Web3.js is a robust and flexible collection of TypeScript and JavaScript libraries that allows developers to interact with local or remote Ethereum nodes (or any EVM-compatible blockchain) over HTTP, IPC or WebSocket connections. It is a powerful and efficient toolkit for crafting applications within the Ethereum ecosystem and beyond.