import { PropsWithChildren } from 'react';
import { Provider as ReduxProviderBase } from 'react-redux';

import { store } from '@/store';
import RainbowConnectKitProvider from './rainbow-connect';

export function ReduxProvider({ children }: PropsWithChildren) {
  return (
    <ReduxProviderBase store={store}>
      <RainbowConnectKitProvider>{children}</RainbowConnectKitProvider>
    </ReduxProviderBase>
  );
}
