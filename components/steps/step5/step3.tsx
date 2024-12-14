import Image from 'next/image';
import { motion } from 'framer-motion';

import { StarIcon } from '@/public/icons';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { generateConsistentColor, slideInFromRightToSettle, slideInFromTopToSettle } from '@/utils/helpers';
import useWindowHeight from '@/hooks/useWindowHeight';

const Step3 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();
  const windowHeight = useWindowHeight();

  const mostUsedProtocols = metrics?.protocolUsage?.mostUsedProtocols;

  const showMostUsedProtocols = Boolean(mostUsedProtocols);

  return (
    <div className="h-full w-full flex flex-col gap-[9px] items-center relative pt-32">
      <motion.p {...slideInFromTopToSettle} className="text-50 text-[14px] leading-[16.52px] font-medium text-center max-w-[242px]">
        You also showed strong loyalty to these protocols making them your
      </motion.p>

      <motion.p
        {...slideInFromRightToSettle}
        transition={{ delay: 1 }}
        className="text-[38px] leading-[40.28px] text-center text-50 font-medium relative z-20"
      >
        <span className="text-600">Top 5</span> DeFi <br /> destinations of <br /> 2024
      </motion.p>

      <div className="flex-1 w-full relative flex items-center justify-center">
        <div className="w-full pt-10 flex items-center justify-center flex-col">
          {showMostUsedProtocols ? (
            <motion.div
              className="flex flex-col items-center justify-center gap-2.5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.5,
                    delay: 1.5,
                  },
                },
              }}
            >
              {mostUsedProtocols?.map((protocol, index) => (
                <motion.div
                  key={index}
                  className="min-w-40 px-6 h-[62px] flex items-center justify-center relative z-30 rounded-full border-[3px] border-black"
                  style={{
                    backgroundColor: generateConsistentColor(protocol),
                    zIndex: [0, 2, 4].includes(index) ? 2 : 1,
                  }}
                  variants={{
                    hidden: { y: -600, opacity: 0 },
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
                  <span className="text-50 text-4xl text-center font-medium">{protocol}</span>
                </motion.div>
              ))}
            </motion.div>
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

        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0, transition: { delay: 1 } }}
          className="absolute w-full h-full flex items-end justify-center z-0"
          style={{
            top: windowHeight < 700 ? '50%' : windowHeight < 750 ? '40%' : '5%',
          }}
        >
          <Image src={'/images/ladder.png'} alt="Ladder" width={300} height={300} className="object-cover" />
        </motion.div>

        <div className="absolute z-20 top-32 left-40 scale-75">
          <StarIcon duration={3} />
        </div>

        <div className="absolute z-20 bottom-[254px] left-[25%]">
          <StarIcon duration={6} />
        </div>

        <div className="absolute z-20 bottom-[105px] right-24 scale-50">
          <StarIcon duration={5} />
        </div>

        <div className="absolute z-20 top-[70px] right-9 scale-50">
          <StarIcon duration={10} />
        </div>

        <div className="absolute z-20 top-56 left-[5%] scale-[.45]">
          <StarIcon duration={6} />
        </div>
      </div>
    </div>
  );
};

export default Step3;
