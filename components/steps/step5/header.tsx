import { motion } from 'framer-motion';
import classNames from 'classnames';

import { DisconnectIcon } from '@/public/icons';
import { DWClickAnimation } from '@/components/UI';
import { useAccount, useDisconnect } from 'wagmi';
import { useMemo } from 'react';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { setMetrics } from '@/store/metrics';

const truncate = (str: string, startChars = 5, endChars = 5) => {
  if (str.length <= startChars + endChars) {
    return str;
  }
  return `${str.substring(0, startChars)}...${str.substring(str.length - endChars)}`;
};

const getDisconnectColor = (step: number) => {
  if (step <= 2) return '#710E21';
  if ((step > 2 && step <= 6) || (step > 10 && step <= 15)) return '#D4E6FF';
  if (step > 6 && step <= 10) return '#1E293B';
};

const Header = ({ step, timer, totalSteps, refresh }: HeaderProps) => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { dispatch } = useSystemFunctions();

  const truncatedText = useMemo(() => {
    if (address !== undefined) {
      return truncate(address);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const handleDisconnectWallet = async () => {
    await disconnect();
    refresh?.();
    dispatch(setMetrics(undefined));
  };

  return (
    <div className="w-full flex flex-col gap-4 pt-8 px-4 relative z-50">
      <div className="flex justify-between items-center">
        <h3
          className={classNames('text-[14px] leading-[18.48px] font-medium transition-colors duration-500', {
            'text-black': step <= 2,
            'text-white': (step > 2 && step <= 6) || (step > 10 && step <= 15),
            'text-50': step > 6 && step <= 10,
          })}
        >
          DeFi Wrapped
        </h3>
        <div className="flex items-center justify-center gap-1">
          <div
            className={classNames(
              'px-[9px] h-[26px] flex items-center justify-center rounded-[14px] text-550 text-[11px] leading-[13.64px] font-medium',
              { 'bg-350': step <= 2, 'bg-50': step > 2 }
            )}
          >
            {truncatedText}
          </div>
          <DWClickAnimation onClick={handleDisconnectWallet}>
            <DisconnectIcon fill={getDisconnectColor(step)} />
          </DWClickAnimation>
        </div>
      </div>

      <div className="flex items-center gap-[3px]">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <motion.div
            key={index}
            className={classNames('relative w-full h-1 rounded overflow-hidden transition-all duration-500', {
              'bg-black/[0.36]': step <= 2,
              'bg-white': step > 2,
            })}
          >
            <motion.div
              animate={{ width: index === step ? `${(timer / 4) * 100}%` : index < step ? '100%' : '0%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute top-0 left-0 h-full bg-50"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Header;
