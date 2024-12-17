'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { toPng } from 'html-to-image';
import { useAccount } from 'wagmi';

import { DisconnectIcon, StarIcon, ReplayIcon } from '@/public/icons';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import useOffsetValue from '@/hooks/useOffsetValue';
import Clouds from '@/assets/clouds';
import { DWClickAnimation, DWHorizontalSnapScroll, DWLoader } from '@/components/UI';

const truncate = (str: string, startChars = 5, endChars = 5) => {
  if (str.length <= startChars + endChars) {
    return str;
  }
  return `${str.substring(0, startChars)}...${str.substring(str.length - endChars)}`;
};

const Summary = ({ onPrev, setShouldTransitionToSix }: StepProps) => {
  const { address } = useAccount();
  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();
  const [step, setSteps] = useState(0);
  const [isSharing, setIsSharing] = useState(false);

  const truncatedText = useMemo(() => {
    if (address !== undefined) {
      return truncate(address);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const paddingTop = useOffsetValue(windowInnerHeight!, {
    small: 0.015,
    medium: 0.02,
    large: 0.045,
  });

  const paddingBottom = useOffsetValue(windowInnerHeight!, {
    small: 0.03,
    medium: 0.04,
    large: 0.09,
  });

  const mostUsedProtocol = metrics?.protocolUsage.mostUsedProtocols[0] || 'N/A';
  const usedCount = metrics?.protocolUsage.interactionCounts[mostUsedProtocol!]?.toLocaleString() || 0;
  const transactionCount = metrics?.transactionActivity.totalTransactions?.toLocaleString() || 'N/A';
  const gasFee = metrics?.transactionActivity.totalGasFee.base?.toLocaleString() || 0;
  const saved = metrics?.transactionActivity.totalGasFee.saved?.toLocaleString() || 0;
  const mostTradedPairs = metrics?.tradingMetrics?.mostSwappedPairs[0] || 'N/A';
  const totalSwapped = metrics?.tradingMetrics?.totalSwapped?.toLocaleString() || 0;
  const earned = metrics?.lendingBorrowing?.interest.earned?.toLocaleString() || 0;
  const lent = metrics?.lendingBorrowing?.totalSupplied?.toLocaleString() || 0;

  const boxRef = useRef<HTMLDivElement>(null);

  const steps = [
    <>
      <span>This year</span>

      <div className="px-6 h-[51px] rounded-[40px] bg-400 border-[3px] border-50 flex items-center justify-center relative">
        <span className="text-[25px] leading-[26.5px] font-medium text-50">{mostUsedProtocol}</span>

        <div className="absolute -top-2 -right-3 z-10">
          <StarIcon duration={5} fill="#FFFFFF" width={36} height={36} />
        </div>

        <div className="absolute -bottom-2 left-0 z-10">
          <StarIcon duration={7} fill="#FFFFFF" width={23} height={23} />
        </div>
      </div>

      <p className="text-center">
        was your most used <br /> protocol with over <span className="text-800">{usedCount?.toLocaleString()}</span> <br /> transactions.
      </p>
    </>,
    <>
      <span>You performed over</span>

      <div className="px-6 h-[51px] rounded-[40px] bg-450 border-[3px] border-50 flex items-center justify-center relative">
        <span className="text-[25px] leading-[26.5px] font-medium text-1000">{transactionCount}</span>

        <div className="absolute -top-2 -right-3 z-10">
          <StarIcon duration={5} fill="#FFFFFF" width={36} height={36} />
        </div>

        <div className="absolute -bottom-2 left-0 z-10">
          <StarIcon duration={7} fill="#FFFFFF" width={23} height={23} />
        </div>
      </div>

      <p className="text-center">
        transactions this year <br /> and spent <span className="text-300">${gasFee}</span> in gas <br /> fees. You saved
        <span className="text-300">${saved}</span> <br /> using <span className="text-300">{'Base'}</span>
      </p>
    </>,
    <>
      <p className="text-center">
        This year, your most <br /> traded pair was
      </p>

      <div className="px-6 h-[51px] rounded-[40px] bg-500 border-[3px] border-50 flex items-center justify-center relative">
        <span className="text-[25px] leading-[26.5px] font-medium text-50">{mostTradedPairs}</span>

        <div className="absolute -top-2 -right-3 z-10">
          <StarIcon duration={5} fill="#FFFFFF" width={36} height={36} />
        </div>

        <div className="absolute -bottom-2 left-0 z-10">
          <StarIcon duration={7} fill="#FFFFFF" width={23} height={23} />
        </div>
      </div>

      <p className="text-center">
        You bought and <br /> sold it <span className="text-300">{totalSwapped}</span> times
      </p>
    </>,
    <>
      <span>You earned over</span>

      <div className="px-6 h-[51px] rounded-[40px] bg-850 border-[3px] border-50 flex items-center justify-center relative">
        <span className="text-[25px] leading-[26.5px] font-medium text-50">${earned}</span>

        <div className="absolute -top-2 -right-3 z-10">
          <StarIcon duration={5} fill="#FFFFFF" width={36} height={36} />
        </div>

        <div className="absolute -bottom-2 left-0 z-10">
          <StarIcon duration={7} fill="#FFFFFF" width={23} height={23} />
        </div>
      </div>

      <p className="text-center">
        in interest while <br /> lending a total of <br /> <span className="text-600">${lent}.</span>
      </p>
    </>,
  ];

  const handleShare = async () => {
    if (!boxRef.current) return;

    try {
      setIsSharing(true);

      await new Promise((resolve) => setTimeout(resolve, 300));

      const dataUrl = await toPng(boxRef.current, {
        pixelRatio: 2,
      });

      const blob = await fetch(dataUrl).then((res) => res.blob());
      const file = new File([blob], 'DeFiWrapped.png', { type: 'image/png' });

      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: 'DeFi Wrapped',
          text: 'Check out my DeFi stats!',
        });
      } else {
        alert('Sharing is not supported on this browser.');
      }
    } catch (error: any) {
      console.error('Failed to share image:', error);

      if (error.name !== 'AbortError') {
        alert('Something went wrong while sharing the image. Please try again.');
      }
    } finally {
      setIsSharing(false);
    }
  };

  const actions = [
    { title: 'Share', onClick: handleShare, loading: isSharing },
    { title: 'Replay', onClick: onPrev, icon: <ReplayIcon /> },
  ];

  useEffect(() => {
    setShouldTransitionToSix?.(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="overflow-hidden relative pt-8 flex flex-col h-full"
      style={{ height: `${windowInnerHeight!}px`, maxHeight: `${windowInnerHeight!}px` }}
    >
      <div className="flex justify-between items-center px-4 relative z-20">
        <h3 className="text-50 text-[14px] leading-[18.48px] font-medium transition-colors duration-500">DeFi Wrapped</h3>
        <div className="flex items-center justify-center gap-1">
          <div
            className={classNames(
              'px-[9px] h-[26px] bg-50 flex items-center justify-center rounded-[14px] text-550 text-[11px] leading-[13.64px] font-medium'
            )}
          >
            {truncatedText}
          </div>

          <DWClickAnimation onClick={() => {}}>
            <DisconnectIcon fill={'#1E293B'} />
          </DWClickAnimation>
        </div>
      </div>

      <div
        className="flex-1 flex flex-col gap-6 items-stretch relative z-20"
        style={{ paddingTop, paddingBottom, justifyContent: windowInnerHeight! > 800 ? 'space-between' : 'flex-start' }}
      >
        <div className="flex flex-col gap-5 items-center">
          <div className="h-[26px] px-5 rounded-full border border-black flex items-center justify-center">
            <span className="text-xs text-50 font-medium">Summary</span>
          </div>

          <DWHorizontalSnapScroll step={step} setSteps={setSteps}>
            {steps.map((step_, index) => (
              <div
                key={index}
                ref={index === step ? boxRef : null}
                className="flex flex-col items-center justify-center gap-1 rounded-[14px] border border-900 bg-950 shadow-primary p-4 min-w-[310px] min-h-[273px] snap-center"
              >
                {step_}
              </div>
            ))}
          </DWHorizontalSnapScroll>
        </div>

        <div className="flex flex-col items-center gap-5 px-4">
          <div className="flex flex-col items-center gap-3">
            {actions.map(({ title, onClick, loading, icon }, index) => (
              <DWClickAnimation
                key={index}
                className={classNames('w-[212px] px-20 rounded-[33px] border-[1.5px] border-50 flex items-center justify-center gap-1', {
                  'bg-300': index == 0,
                  'bg-1050': index == 1,
                  'h-[66px]': windowInnerHeight! > 750,
                  'h-[52px]': windowInnerHeight! < 750,
                })}
                onClick={onClick}
              >
                {loading ? (
                  <DWLoader />
                ) : (
                  <>
                    {icon && <div className="min-w-fit">{icon}</div>}
                    <span className="text-[18px] leading-[23.76px] text-50 text-center font-bold whitespace-nowrap">{title}</span>
                  </>
                )}
              </DWClickAnimation>
            ))}
          </div>

          <p className="text-150 text-xs font-medium text-center">
            Liquid is making DeFi as simple as browsing <br /> a social feed. Join the waitlist{' '}
            <a href="https://useliquid.xyz" target="_blank" className="underline underline-offset-2 text-600">
              here
            </a>
          </p>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <Clouds fill="#C2D6FF" numberOfClouds={6} />
      </div>
    </div>
  );
};

export default Summary;
