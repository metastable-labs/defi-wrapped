import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_APP_NAME as string,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  //   ssr: true,
});

const RainbowConnectKitProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowConnectKitProvider;
