import "../styles/globals.css";
// Thirdweb
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Polygon } from "@thirdweb-dev/chains";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useState } from "react";
// Components
import Header from "../components/header.jsx";

export default function App({ Component, pageProps }) {
  // State

  return (
    <ThirdwebProvider activeChain="polygon">
      <Header />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
