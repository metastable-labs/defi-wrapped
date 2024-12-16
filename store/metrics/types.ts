type Metrics = {
  success: boolean;
  address: string;
  protocolUsage: {
    mostUsedProtocols: Array<string>;
    interactionCounts: Record<string, number>;
  };
  transactionActivity: {
    totalTransactions: number;
    averageTransactionValue: number;
    largestTransaction: {
      value: number;
      date: string;
    };
    smallestTransaction: {
      value: number;
      date: string | null;
    };
    totalGasFee: {
      base: number;
      eth: number;
      saved: number;
    };
  };
  tradingMetrics: {
    totalSwapped: number;
    mostSwappedPairs: Array<string>;
    liquidityPools: {
      pool: string;
      contribution: number;
    }[];
  };
  lendingBorrowing: {
    totalSupplied: number;
    totalBorrowed: number;
    interest: {
      earned: number;
      paid: number;
    };
  };
};
