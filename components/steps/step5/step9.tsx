import Image from 'next/image';
import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useOffsetValue from '@/hooks/useOffsetValue';
import { StarIcon } from '@/public/icons';
import { slideInFromTopToSettle, slideInFromRightToSettle, slideInFromBottomToSettle } from '@/utils/helpers';
import EmptyState from './empty';

const Step9 = () => {
  const {
    metricsState: { metrics },
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const paddingTop = useOffsetValue(windowInnerHeight!, {
    small: 0.15,
    medium: 0.175,
    large: 0.2,
  });

  const iconWidth = windowInnerHeight! < 750 ? 250 : 300;
  const iconHeight = windowInnerHeight! < 750 ? 229 : 269;

  const signatureTradingPair = metrics?.tradingMetrics.mostSwappedPairs[0];
  const totalTradingVolume = metrics?.tradingMetrics?.totalSwapped?.toLocaleString();

  if (!signatureTradingPair) {
    return <EmptyState title="You didn't have any signature trading pairs" variant="secondary" />;
  }

  return (
    <div
      className="h-full w-full flex flex-col items-center relative"
      style={{
        paddingTop,
        gap: windowInnerHeight! < 750 ? '36px' : '48px',
      }}
    >
      <div className="flex flex-col gap-3.5">
        <motion.p {...slideInFromTopToSettle} className="text-32 md:text-38 text-center text-50 font-medium">
          Your signature <br /> trading pair was
        </motion.p>

        <motion.div
          {...slideInFromRightToSettle}
          transition={{ delay: 1 }}
          className="px-4 h-[62px] rounded-[40px] bg-400 border-[3px] border-50 flex items-center justify-center relative"
        >
          <span className="text-32 md:text-38 text-center text-50 font-medium">{signatureTradingPair || 'N/A'}</span>

          <div className="absolute -top-2 -right-3 z-10">
            <StarIcon duration={5} fill="#FFFFFF" width={36} height={36} />
          </div>

          <div className="absolute -bottom-2 left-0 z-10">
            <StarIcon duration={7} fill="#FFFFFF" width={23} height={23} />
          </div>
        </motion.div>

        <motion.p {...slideInFromBottomToSettle} transition={{ delay: 2 }} className="text-32 md:text-38 text-center text-50 font-medium">
          contributing to <br /> your total <br /> trading volume <br /> of <span className="text-650">${totalTradingVolume}.</span>
        </motion.p>
      </div>

      <motion.div initial={{ y: 100, scale: 0.5, opacity: 0 }} animate={{ y: -20, scale: 1, opacity: 1, transition: { delay: 3 } }}>
        <Image
          src={'/images/double-coins.png'}
          alt="double coins"
          width={iconWidth}
          height={iconHeight}
          quality={100}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Step9;
