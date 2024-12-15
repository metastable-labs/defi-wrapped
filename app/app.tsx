'use client';
import { useEffect } from 'react';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useAppActions from '@/store/app/actions';
import { ReduxProvider } from '@/providers/ReduxProvider';

const Initializer = ({ children }: { children: React.ReactNode }) => {
  const {
    appState: { windowInnerHeight, initializing },
  } = useSystemFunctions();
  const { getWindowInnerHeight } = useAppActions();

  useEffect(() => {
    getWindowInnerHeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing || !windowInnerHeight) return null;

  return <>{children}</>;
};

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <Initializer>{children}</Initializer>
    </ReduxProvider>
  );
};

export default App;
