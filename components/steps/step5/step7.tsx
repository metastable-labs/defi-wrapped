import Image from 'next/image';
import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { StarIcon } from '@/public/icons';
import { slideInFromBottomToSettle, slideInFromLeftToSettle, slideInFromTopToSettle } from '@/utils/helpers';
import useOffsetValue from '@/hooks/useOffsetValue';

const Step7 = () => {
  const {
    metricsState: { metrics },
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const searchPieDimension = windowInnerHeight! < 750 ? 290 : 350;

  const bottom = useOffsetValue(windowInnerHeight!, {
    small: 0.05,
    medium: 0.075,
    large: 0.09,
  });

  const smallestTransaction = metrics?.transactionActivity.smallestTransaction.value?.toLocaleString();

  return (
    <div
      className="h-full w-full flex flex-col gap-8 items-center justify-between relative"
      style={{
        paddingTop: windowInnerHeight! < 700 ? `${windowInnerHeight! * 0.15}px` : `${windowInnerHeight! * 0.2}px`,
      }}
    >
      <div className="flex flex-col gap-3.5">
        <motion.div {...slideInFromTopToSettle} className="relative">
          <p className="text-32 md:text-38 text-center text-50 font-medium relative">
            While staying <br /> grounded <br /> with a
          </p>

          <div className="absolute bottom-0 left-9 z-10 scale-50">
            <StarIcon duration={3} />
          </div>
        </motion.div>

        <motion.div
          transition={{
            delay: 1,
          }}
          {...slideInFromLeftToSettle}
          className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center"
        >
          <span className="text-32 md:text-38 text-center text-50 font-medium">${smallestTransaction}</span>
        </motion.div>

        <motion.p
          {...slideInFromBottomToSettle}
          transition={{
            delay: 2,
          }}
          className="text-32 md:text-38 text-center text-650 font-medium"
        >
          micro- <br /> transaction
        </motion.p>
      </div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 3 } }}
        className="absolute left-0"
        style={{ bottom }}
      >
        <Image
          src="/images/search-pie.png"
          alt="Search Pie"
          width={searchPieDimension}
          height={searchPieDimension}
          className="object-cover w-full"
        />
      </motion.div>

      <div className="absolute bottom-28 left-20 z-10 scale-75">
        <StarIcon duration={3} />
      </div>

      <div className="absolute bottom-20 right-14 z-10 scale-50">
        <StarIcon duration={3} />
      </div>
    </div>
  );
};

export default Step7;
