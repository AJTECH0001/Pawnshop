import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ArbitrumSepolia } from '@particle-network/chains';
import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import { config } from '../wagmi';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
        <AuthCoreContextProvider
      options={{
        projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID || "",  
        clientKey: process.env.NEXT_PUBLIC_APP_CLIENT_KEY || "",
        appId: process.env.NEXT_PUBLIC_APP_APP_ID || "",// --
        erc4337: {
          // Optional
          name: 'SIMPLE', // The smart account you intend to use
          version: '1.0.0', // Leave as 1.0.0 unless you're using Biconomy V2
        },
        wallet: {
          // Optional
          visible: true, // Whether or not the embedded wallet modal is shown
          customStyle: {
            supportChains: [ArbitrumSepolia], // Locking the modal to Arbitrum Sepolia
          },
        },
      }}
    >
      <Component {...pageProps} />
       </AuthCoreContextProvider>
          
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
