import Image from 'next/image';
import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useWindowHeight from '@/hooks/useWindowHeight';
import { StarIcon } from '@/public/icons';
import { slideInFromTopToSettle, slideInFromRightToSettle, slideInFromBottomToSettle } from '@/utils/helpers';

const Step9 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();
  const windowHeight = useWindowHeight();

  const signatureTradingPair = metrics?.tradingMetrics.mostSwappedPairs[0];
  const totalTradingVolume = metrics?.tradingMetrics?.totalSwapped?.toLocaleString();

  return (
    <div
      className="h-full w-full flex flex-col items-center relative"
      style={{
        paddingTop: windowHeight! < 700 ? `${windowHeight! * 0.15}px` : `${windowHeight! * 0.2}px`,
        gap: windowHeight! < 700 ? '4px' : '48px',
      }}
    >
      <div className="flex flex-col gap-3.5">
        <motion.p {...slideInFromTopToSettle} className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
          Your signature <br /> trading pair was
        </motion.p>

        <motion.div
          {...slideInFromRightToSettle}
          transition={{ delay: 1 }}
          className="px-4 h-[62px] rounded-[40px] bg-400 border-[3px] border-50 flex items-center justify-center relative"
        >
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{signatureTradingPair || 'N/A'}</span>

          <div className="absolute -top-2 -right-3 z-10">
            <StarIcon duration={5} fill="#FFFFFF" width={36} height={36} />
          </div>

          <div className="absolute -bottom-2 left-0 z-10">
            <StarIcon duration={7} fill="#FFFFFF" width={23} height={23} />
          </div>
        </motion.div>

        <motion.p
          {...slideInFromBottomToSettle}
          transition={{ delay: 2 }}
          className="text-[38px] leading-[40.28px] text-center text-50 font-medium"
        >
          contributing to <br /> your total <br /> trading volume <br /> of <span className="text-650">${totalTradingVolume}.</span>
        </motion.p>
      </div>

      <motion.div initial={{ y: 100, scale: 0.5, opacity: 0 }} animate={{ y: -20, scale: 1, opacity: 1, transition: { delay: 3 } }}>
        <Image src={'/images/double-coins.png'} alt="double coins" width={300} height={269} quality={100} className="object-cover" />
      </motion.div>
    </div>
  );
};

export default Step9;
