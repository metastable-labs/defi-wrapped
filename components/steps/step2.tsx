import { useEffect } from 'react';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

import useSystemFunctions from '@/hooks/useSystemFunctions';

const Step2 = ({ onNext }: StepProps) => {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const handleConnect = () => {
    if (openConnectModal) {
      openConnectModal();
    }
  };

  useEffect(() => {
    if (isConnected && address) onNext?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, address]);

  return (
    <div
      className="bg-background-150 overflow-hidden flex flex-col relative h-screen"
      style={{ height: `${windowInnerHeight!}px`, maxHeight: `${windowInnerHeight!}px` }}
    >
      <div className="relative flex justify-center">
        <Image src={'/images/colors.png'} alt="colors" width={300} height={300} className="object-cover w-full" />
      </div>

      <div
        className="w-full flex flex-col items-center gap-[10px] z-50 absolute left-0"
        style={{
          top: windowInnerHeight! < 700 ? '70%' : '50%',
        }}
      >
        <button
          onClick={() => handleConnect()}
          type="button"
          className="bg-background-200 text-lg font-bold border-[1.5px] border-200 h-[69px] px-20 rounded-full"
        >
          Connect Wallet
        </button>

        <p className="text-xs font-medium text-250 w-[45%] text-center">Securely connect your crypto wallet to proceed...</p>
      </div>
    </div>
  );
};

export default Step2;
