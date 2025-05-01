# Solana Token Creation Website

Create Solana SPL Tokens for free or provide a service to create tokens for a fee.

## Disclaimer

This project is for educational purposes only. It is not intended to be used in production. Use at your own risk. The author is not responsible for any loss of funds or other damages caused by the use of this software.

## Setup

1. Fork/Clone this Repo
2. Create Account on Helius for your own RPC URL (sign up with google) https://dashboard.helius.dev/signup
3. Create Account on Pinata for IPFS Storage (sign up with google) https://app.pinata.cloud/auth/signin and create a own api keys
4. open `config.js`
5. set config variables
   1. `window.recipient` FEE RECIPIENT
   2. `window.rpc` RPC URL
   3. `window.pinata_secret_api_key` YOUR PINATA SECRET API KEY
   4. `window.pinata_api_key` YOUR PINATA API KEY
   5. `window.price` OPTIONAL FEE PRICE
   6. `window.base_fee` BASE FEE
   7. `window.copy_price` PRICE FOR COPYING TOKEN
   8. ... and more if needed

## Start locally

- `npm run start`

## Deploy on vercel free

1. Register on Vercel & connect your github repo
2. Vercel deployment should work automatically without build, simply select the repo and deploy
