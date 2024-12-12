import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { generateConsistentColor } from '@/utils/helpers';

const Step10 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const showLiquidityPools = Boolean(metrics?.tradingMetrics.liquidityPools.length);

  return (
    <div className="h-full w-full flex flex-col gap-14 items-center relative pt-52">
      <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
        You provided <br /> <span className="text-650">liquidity</span> to pools
      </p>

      <div className="relative">
        <div className="w-full pt-10 flex items-center justify-center flex-col gap-2">
          {showLiquidityPools ? (
            metrics?.tradingMetrics?.liquidityPools.map((pool, index) => (
              <motion.div
                key={pool}
                className="min-w-40 px-6 h-[62px] flex items-center justify-center relative rounded-full border-[3px] border-black"
                style={{
                  backgroundColor: generateConsistentColor(pool),
                  zIndex: [0, 2, 4].includes(index) ? 2 : 1,
                }}
                animate={{
                  rotate: [0, [0, 2, 4].includes(index) ? 10 : -10, [0, 2, 4].includes(index) ? -10 : 10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              >
                <span className="text-50 text-4xl text-center font-medium">{pool}</span>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="min-w-40 px-6 h-[62px] flex items-center justify-center relative rounded-full border-[3px] border-black bg-white z-10"
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 4,
                delay: 0.3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              <span className="text-50 text-4xl text-center font-medium">N/A</span>
            </motion.div>
          )}
        </div>

        <div className="absolute w-full h-[364px] flex flex-col items-center justify-center top-0">
          <div className="flex-1 w-4 bg-white border-t-[3px] border-x-[3px] border-black" />
          <div className="w-[90px] h-5 bg-white border-[3px] border-black" />
        </div>
      </div>
    </div>
  );
};

export default Step10;
