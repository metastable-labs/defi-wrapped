'use client';

import { ReduxProvider } from '@/providers/ReduxProvider';

const App = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default App;
