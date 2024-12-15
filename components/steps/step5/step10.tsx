import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useWindowHeight from '@/hooks/useOffsetValue';
import { generateConsistentColor, slideInFromTopToSettle } from '@/utils/helpers';

const Step10 = () => {
  const {
    metricsState: { metrics },
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const showLiquidityPools = Boolean(metrics?.tradingMetrics.liquidityPools.length);

  return (
    <div
      className="h-full w-full flex flex-col items-center relative"
      style={{
        paddingTop: windowInnerHeight! < 700 ? `${windowInnerHeight! * 0.15}px` : `${windowInnerHeight! * 0.2}px`,
        gap: windowInnerHeight! < 700 ? '64px' : '48px',
      }}
    >
      <motion.p {...slideInFromTopToSettle} className="text-32 md:text-38 text-center text-50 font-medium">
        You provided <br /> <span className="text-650">liquidity</span> to pools
      </motion.p>

      <div className="relative">
        <div className="w-full pt-10 flex items-center justify-center flex-col gap-2">
          {showLiquidityPools ? (
            <motion.div
              className="flex items-center justify-center flex-col gap-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                    delay: 1.5,
                  },
                },
              }}
            >
              {metrics?.tradingMetrics?.liquidityPools.map((pool, index) => (
                <motion.div
                  key={pool}
                  className="min-w-40 px-6 h-[62px] flex items-center justify-center relative rounded-full border-[3px] border-black"
                  style={{
                    backgroundColor: generateConsistentColor(pool),
                    zIndex: [0, 2, 4].includes(index) ? 2 : 1,
                  }}
                  variants={{
                    hidden: { y: -50, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  animate={{
                    rotate: [0, [0, 2, 4].includes(index) ? 10 : -10, [0, 2, 4].includes(index) ? -10 : 10, 0],
                  }}
                  transition={{
                    y: { duration: 0.8, ease: 'easeOut' },
                    rotate: {
                      duration: 2,
                      delay: index * 0.3,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <span className="text-50 text-4xl text-center font-medium">{pool}</span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="min-w-40 px-6 h-[62px] flex items-center justify-center relative rounded-full border-[3px] border-black bg-white z-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                opacity: { duration: 1.5, ease: 'easeInOut', delay: 1.5 },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                },
              }}
            >
              <span className="text-50 text-4xl text-center font-medium">N/A</span>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0, transition: { delay: 1 } }}
          className="absolute w-full flex flex-col items-center justify-center top-0"
          style={{
            height: windowInnerHeight! < 700 ? '300px' : '364px',
          }}
        >
          <div className="flex-1 w-4 bg-white border-t-[3px] border-x-[3px] border-black" />
          <div className="w-[90px] h-5 bg-white border-[3px] border-black" />
        </motion.div>
      </div>
    </div>
  );
};

export default Step10;
