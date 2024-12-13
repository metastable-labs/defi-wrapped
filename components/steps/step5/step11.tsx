import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import {
  slideInFromTopToSettle,
  slideInFromBottomToSettle,
  slideInFromLeftToSettle,
  slideInFromRightToSettle,
  growInAnimation,
} from '@/utils/helpers';

const Step11 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const earned = 56_000?.toLocaleString();
  const aero = 6_000?.toLocaleString();
  return (
    <div className="h-full w-full flex flex-col gap-2.5 justify-center items-center relative">
      <motion.span {...slideInFromTopToSettle} className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
        You earned
      </motion.span>

      <motion.div
        {...slideInFromRightToSettle}
        transition={{ delay: 1 }}
        className="px-4 h-[62px] rounded-[40px] bg-400 border-[3px] border-50 flex items-center justify-center"
      >
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${earned}</span>
      </motion.div>

      <motion.p
        {...slideInFromLeftToSettle}
        transition={{ delay: 1.5 }}
        className="text-[38px] leading-[40.28px] text-center text-50 font-medium"
      >
        amount from <br /> trading fees <br /> and
      </motion.p>

      <motion.div
        {...slideInFromBottomToSettle}
        transition={{ delay: 2 }}
        className="px-4 h-[62px] rounded-[40px] bg-750 border-[3px] border-50 flex items-center justify-center"
      >
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{aero} AERO</span>
      </motion.div>

      <motion.p transition={{ delay: 3 }} {...growInAnimation} className="text-[38px] leading-[40.28px] text-center text-650 font-medium">
        <span className="text-50">from</span> Aero <br /> token <br /> Emissions
      </motion.p>
    </div>
  );
};

export default Step11;
