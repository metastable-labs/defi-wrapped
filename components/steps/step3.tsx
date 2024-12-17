import { useEffect } from 'react';
import Image from 'next/image';
import { useAccount } from 'wagmi';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useMetricsActions from '@/store/metrics/actions';

const Step3 = ({ onNext }: StepProps) => {
  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const {
    metricsState: { loading, metrics },
  } = useSystemFunctions();
  const { getMetrics } = useMetricsActions();
  const { address } = useAccount();

  useEffect(() => {
    if (!address) return;

    getMetrics(address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (!loading && metrics) {
      onNext?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div
      className="bg-background-250 overflow-hidden flex flex-col pt-40 items-center gap-4"
      style={{ height: `${windowInnerHeight!}px`, maxHeight: `${windowInnerHeight!}px` }}
    >
      <Image alt="animation loader" className="bg-transparent" src="/images/loading.gif" width={220} height={220} />
      <p className="text-sm font-medium text-50 w-[45%] text-center">Please wait while we get your information...</p>
    </div>
  );
};

export default Step3;
