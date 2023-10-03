import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { configureChains } from "wagmi";
import { goerli, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains } = configureChains(
  [polygonMumbai, goerli],
  [
    alchemyProvider({ apiKey: "Rwja692xoss6YsaqbUDRNVwpjZrO4ltM" }),
    publicProvider(),
  ]
);

// const config = createConfig(
//   getDefaultConfig({
//     // Required API Keys
//     alchemyId: "Rwja692xoss6YsaqbUDRNVwpjZrO4ltM", // or infuraId
//     // walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

//     // Required
//     appName: "VidWeave",

//     // Optional
//     appDescription: "Your App Description",
//     appUrl: "https://family.co", // your app's url
//     appLogo: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
//     chain,
//   })
// );

const config = createConfig(
  getDefaultConfig({
    appName: "Your App Name",
    alchemyId: "Rwja692xoss6YsaqbUDRNVwpjZrO4ltM",
    walletConnectProjectId: "0c1af47867ddda44a884a72a581f8fc1",
    chains,
  })
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <WagmiConfig config={config}>
    <ConnectKitProvider theme="midnight">
      <App />
    </ConnectKitProvider>
  </WagmiConfig>
);
