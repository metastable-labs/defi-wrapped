import Image from 'next/image';
import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { slideInFromBottomToSettle, slideInFromLeftToSettle, slideInFromRightToSettle, slideInFromTopToSettle } from '@/utils/helpers';
import { StarIcon } from '@/public/icons';

const Step16 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const interestPaid = (metrics?.lendingBorrowing?.interest?.paid || 0) / 100000000000000000000;
  const paid = interestPaid.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="h-full w-full flex flex-col gap-16 justify-center items-center relative">
      <div className="flex flex-col items-center justify-center gap-3.5">
        <div className="relative">
          <motion.p {...slideInFromTopToSettle} className="text-32 md:text-38 text-center text-white font-medium">
            While paying
          </motion.p>

          <div className="absolute -bottom-1.5 left-10 z-10">
            <StarIcon duration={7} width={17} height={17} />
          </div>
        </div>

        <motion.div
          {...slideInFromLeftToSettle}
          transition={{ delay: 1 }}
          className="px-6 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center"
        >
          <span className="text-32 md:text-38 text-center text-50 font-medium">${paid}</span>
        </motion.div>

        <motion.p {...slideInFromRightToSettle} transition={{ delay: 2 }} className="text-32 md:text-38 text-center text-white font-medium">
          in borrowing <br /> cost
        </motion.p>
      </div>

      <motion.div {...slideInFromBottomToSettle} transition={{ delay: 2.9 }} className="relative">
        <Image src={'/images/dollar-coins.png'} alt="Fly Coin" width={218} height={142.4} className="object-cover" quality={100} />

        <div className="absolute -bottom-6 -left-2.5 z-10">
          <StarIcon duration={6} width={23} height={23} />
        </div>

        <div className="absolute -bottom-12 -right-5 z-10">
          <StarIcon duration={6} width={12} height={12} />
        </div>
      </motion.div>
    </div>
  );
};

export default Step16;
