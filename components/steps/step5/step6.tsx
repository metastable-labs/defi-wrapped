import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useWindowHeight from '@/hooks/useWindowHeight';
import Treasure from '@/assets/treasure';
import { StarIcon } from '@/public/icons';
import { slideInFromBottomToSettle, slideInFromLeftToSettle, slideInFromTopToSettle } from '@/utils/helpers';

const Step6 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();
  const windowHeight = useWindowHeight();

  const largestTransaction = metrics?.transactionActivity.largestTransaction.value?.toLocaleString();

  return (
    <div
      className="h-full w-full flex flex-col gap-8 items-center relative"
      style={{
        paddingTop: windowHeight! < 700 ? `${windowHeight! * 0.15}px` : `${windowHeight! * 0.2}px`,
      }}
    >
      <div className="flex flex-col gap-3.5">
        <motion.div {...slideInFromTopToSettle} className="relative">
          <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium relative">
            Your <span className="text-650">portfolio</span> <br /> reached its <br /> peak with a
          </p>

          <div className="absolute bottom-4 left-8 z-10 scale-50">
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
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${largestTransaction}</span>
        </motion.div>

        <motion.p
          {...slideInFromBottomToSettle}
          transition={{
            delay: 2,
          }}
          className="text-[38px] leading-[40.28px] text-center text-50 font-medium"
        >
          transactions <br /> in <span className="text-650">December.</span>
        </motion.p>
      </div>

      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { delay: 3 } }} className="relative">
        <Treasure />

        <div className="absolute bottom-6 -left-2 z-10 scale-90 rotate-45">
          <StarIcon duration={5} />
        </div>

        <div className="absolute bottom-6 left-[125px] scale-[.45] z-10">
          <StarIcon duration={6} />
        </div>
      </motion.div>
    </div>
  );
};

export default Step6;
