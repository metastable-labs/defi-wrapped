import Image from 'next/image';
import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useWindowHeight from '@/hooks/useOffsetValue';
import { slideInFromBottomToSettle, slideInFromLeftToSettle, slideInFromRightToSettle, slideInFromTopToSettle } from '@/utils/helpers';
import { StarIcon } from '@/public/icons';

const Step15 = () => {
  const {
    metricsState: { metrics },
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const earned = metrics?.lendingBorrowing?.interest?.earned.toLocaleString();

  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center relative"
      style={{
        gap: windowInnerHeight! < 700 ? '40px' : '64px',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-3.5">
        <div className="relative">
          <motion.p {...slideInFromTopToSettle} className="text-32 md:text-38 text-center text-white font-medium">
            Your lending <br /> strategy <br /> earned you
          </motion.p>

          <div className="absolute bottom-7 left-[32px] z-10">
            <StarIcon duration={6} width={17} height={17} />
          </div>
        </div>

        <motion.div
          {...slideInFromRightToSettle}
          transition={{ delay: 1 }}
          className="px-6 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center"
        >
          <span className="text-32 md:text-38 text-center text-50 font-medium">${earned}</span>
        </motion.div>

        <motion.span
          {...slideInFromLeftToSettle}
          transition={{ delay: 2 }}
          className="text-32 md:text-38 text-center text-white font-medium"
        >
          in interest
        </motion.span>
      </div>

      <motion.div {...slideInFromBottomToSettle} transition={{ delay: 2.5 }} className="relative">
        <Image src={'/images/fly-coin.png'} alt="Fly Coin" width={284.6} height={155.6} className="object-cover" quality={100} />

        <div className="absolute bottom-0 left-[30px] z-10">
          <StarIcon duration={6} width={23} height={23} />
        </div>

        <div className="absolute -bottom-8 -right-0.5 z-10">
          <StarIcon duration={6} width={12} height={12} />
        </div>
      </motion.div>
    </div>
  );
};

export default Step15;
