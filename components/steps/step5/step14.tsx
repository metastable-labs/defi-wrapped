import Image from 'next/image';
import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import {
  slideInFromTopToSettle,
  slideInFromBottomToSettle,
  slideInFromLeftToSettle,
  slideInFromRightToSettle,
  growInAnimation,
} from '@/utils/helpers';
import { StarIcon } from '@/public/icons';

const Step14 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const lent = metrics?.lendingBorrowing?.totalSupplied.toLocaleString();
  const borrowed = metrics?.lendingBorrowing?.totalBorrowed.toLocaleString();
  return (
    <div className="h-full w-full flex flex-col gap-3.5 justify-between items-center relative pt-60">
      <div className="flex flex-col items-center justify-center gap-3.5">
        <motion.h1 {...slideInFromTopToSettle} className="text-[38px] leading-[40.28px] text-center text-white font-medium">
          You lent
        </motion.h1>

        <motion.div
          {...slideInFromRightToSettle}
          transition={{ delay: 1 }}
          className="px-8 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center relative"
        >
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${lent}</span>

          <div className="absolute -top-0 -left-0 z-10">
            <StarIcon duration={5} width={17} height={17} />
          </div>
        </motion.div>

        <motion.p
          {...slideInFromLeftToSettle}
          transition={{ delay: 2 }}
          className="text-[38px] leading-[40.28px] text-center text-white font-medium"
        >
          and borrowed
        </motion.p>

        <motion.div
          {...slideInFromBottomToSettle}
          transition={{ delay: 3 }}
          className="px-8 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center"
        >
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${borrowed}</span>
        </motion.div>
      </div>

      <motion.div {...growInAnimation} transition={{ delay: 3 }} className="-mt-5 relative">
        <Image src={'/images/slip.png'} alt="Slip Image" width={375} height={500} className="h-full object-cover" quality={100} />

        <div className="absolute bottom-44 left-0 z-10 rotate-45">
          <StarIcon duration={6} width={23} height={23} />
        </div>

        <div className="absolute bottom-14 right-14 z-10">
          <StarIcon duration={4} width={12} height={12} />
        </div>
      </motion.div>
    </div>
  );
};

export default Step14;
