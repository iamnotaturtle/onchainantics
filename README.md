# onchainantics

A web application for quickly deploying and interacting with ERC20 tokens (optional faucet), ERC721 NFTs, and ERC-4626 / ERC-7540 vaults on supported testnets. Connect your wallet, configure parameters, and deploy in minutes.

## How It Works

1. **Connect Wallet**: Connect your Web3 wallet (MetaMask, WalletConnect, etc.)
2. **Pick a type**: ERC20 token, ERC721 NFT, or tokenized vault
3. **Configure & Deploy**: Set parameters and deploy from the browser
4. **Interact**: Mint, transfer, check balances, claim from a faucet, or deposit/redeem vault shares

The ERC20 faucet option includes a "Money Pweese" function that allows anyone to claim 5 tokens per request.

## Supported Networks

The application supports multiple testnets including Sepolia, Goerli, Mumbai, Base Sepolia, and Arbitrum Sepolia.

## Try It Out

Live demo: https://iamnotaturtle.github.io/onchainantics/

## Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
