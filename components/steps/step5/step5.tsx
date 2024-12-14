import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useWindowHeight from '@/hooks/useWindowHeight';
import CoinsStacked from '@/assets/coins-stacked';
import { StarIcon } from '@/public/icons';
import {
  slideInFromBottomToSettle,
  slideInFromLeftToSettle,
  slideInFromTopToSettle,
  slideInFromRightToSettle,
  growInAnimation,
} from '@/utils/helpers';

const Step5 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();
  const windowHeight = useWindowHeight();

  const transactions = metrics?.transactionActivity.totalTransactions?.toLocaleString();
  const averageTransaction = metrics?.transactionActivity.averageTransactionValue?.toLocaleString();
  return (
    <div
      className="h-full w-full flex flex-col gap-2 items-center relative"
      style={{
        paddingTop: `${windowHeight * 0.2}px`,
      }}
    >
      <motion.h1 {...slideInFromTopToSettle} className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
        You executed
      </motion.h1>

      <motion.div
        transition={{
          delay: 1,
        }}
        {...slideInFromLeftToSettle}
        className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center relative"
      >
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{transactions}</span>

        <div className="absolute -bottom-5 -left-3 z-10 scale-50">
          <StarIcon duration={3} />
        </div>
      </motion.div>

      <motion.p
        {...slideInFromBottomToSettle}
        transition={{
          delay: 2,
        }}
        className="text-[38px] leading-[40.28px] text-center text-650 font-medium"
      >
        transactions <br /> this year <br /> <span className="text-50">averaging</span>
      </motion.p>

      <motion.div
        {...slideInFromRightToSettle}
        transition={{
          delay: 3,
        }}
        className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center relative"
      >
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${averageTransaction}</span>

        <div className="absolute top-2.5 -right-4 scale-95">
          <StarIcon duration={10} />
        </div>
      </motion.div>

      <motion.span
        {...growInAnimation}
        transition={{
          delay: 3.2,
        }}
        className="text-[38px] leading-[40.28px] text-center text-50 font-medium"
      >
        each
      </motion.span>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 3 } }}
        className="absolute"
        style={{
          bottom: windowHeight < 700 ? `${-(windowHeight * 0.1)}px` : `${windowHeight * 0.03}px`,
        }}
      >
        <motion.div className="relative">
          <CoinsStacked />

          <div className="absolute bottom-20 left-9 z-10">
            <StarIcon duration={5} />
          </div>

          <div className="absolute top-28 right-11 scale-[.65] z-10 rotate-45">
            <StarIcon duration={6} />
          </div>

          <div className="absolute bottom-14 -right-4 scale-[.40] z-10">
            <StarIcon duration={4} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Step5;
