import { motion } from 'framer-motion';

import CircleStack from '@/assets/circle-stack';
import { StarIcon } from '@/public/icons';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import {
  generateConsistentColor,
  slideInFromBottomToSettle,
  slideInFromLeftToSettle,
  slideInFromTopToSettle,
  slideInFromRightToSettle,
  growInAnimation,
} from '@/utils/helpers';

const Step2 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const mostFrequentDestination = metrics?.protocolUsage.mostUsedProtocols[0];
  const mostFrequentDestinationColor = generateConsistentColor(mostFrequentDestination! || '');
  const mostFrequentDestinationCount = (metrics?.protocolUsage.interactionCounts[mostFrequentDestination!] || 0).toLocaleString();
  return (
    <div className="h-full w-full flex flex-col gap-2 justify-center items-center relative">
      <motion.h1 {...slideInFromTopToSettle} className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
        Your most <br /> frequent <br /> destination was
      </motion.h1>

      <motion.div
        transition={{
          delay: 1,
        }}
        {...slideInFromLeftToSettle}
        style={{
          backgroundColor: mostFrequentDestinationColor,
        }}
        className="px-4 h-[62px] rounded-[40px] border-[3px] border-50 flex items-center justify-center"
      >
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{mostFrequentDestination}</span>
      </motion.div>

      <motion.h1
        {...slideInFromBottomToSettle}
        transition={{
          delay: 2,
        }}
        className="text-[38px] leading-[40.28px] text-center text-50 font-medium"
      >
        where you <br /> executed over
      </motion.h1>

      <motion.div
        {...slideInFromRightToSettle}
        transition={{
          delay: 3,
        }}
        className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center relative"
      >
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{mostFrequentDestinationCount}</span>

        <div className="absolute -top-2 -right-3 scale-95">
          <StarIcon duration={5} />
        </div>

        <div className="absolute -bottom-2 -left-3 scale-[.60]">
          <StarIcon />
        </div>
      </motion.div>

      <motion.span
        {...growInAnimation}
        transition={{
          delay: 3.2,
        }}
        className="text-[38px] leading-[40.28px] text-center text-600 font-medium"
      >
        transactions
      </motion.span>

      <div className="absolute bottom-28 right-[40%] scale-50 z-10">
        <StarIcon duration={5} />
      </div>

      <div className="absolute bottom-5 flex items-center justify-between w-full">
        <CircleStack />
        <motion.div initial={false} animate={{ rotateY: 180 }} transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <CircleStack />
        </motion.div>
      </div>
    </div>
  );
};

export default Step2;
