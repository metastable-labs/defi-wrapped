import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, getDefaultWallets, RainbowKitProvider, Wallet } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { farcasterFrame } from '@farcaster/frame-wagmi-connector';
import FrameSDK from '@farcaster/frame-sdk';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

const { wallets } = getDefaultWallets();

const farcasterWallet: Wallet = {
  id: 'farcaster-frame',
  name: 'Farcaster Frame',
  iconUrl: 'https://www.farcaster.xyz/favicon.ico',
  iconBackground: '#fff',
  createConnector: farcasterFrame,
};

const RainbowConnectKitProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    const initializeConfig = async () => {
      await FrameSDK.actions.ready();
      const context = await FrameSDK.context;

      const walletConfig = context
        ? [...wallets, { groupName: 'Farcaster', wallets: [() => farcasterWallet] }]
        : wallets;

      const newConfig = getDefaultConfig({
        appName: process.env.NEXT_PUBLIC_APP_NAME as string,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
        chains: [mainnet, polygon, optimism, arbitrum, base],
        wallets: walletConfig,
      });

      setConfig(newConfig);
    };

    initializeConfig();
  }, []);

  if (!config) return null;

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowConnectKitProvider;
