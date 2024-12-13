import Image from 'next/image';
import { motion } from 'framer-motion';

import { slideInFromTopToSettle, slideInFromBottomToSettle } from '@/utils/helpers';

const Step12 = () => {
  return (
    <div className="h-full w-full flex flex-col items-center relative pt-60 gap-16">
      <motion.h1 {...slideInFromTopToSettle} className="text-[55px] leading-[55px] text-center text-white font-medium relative z-50">
        Lending & <br /> Borrowing
      </motion.h1>

      <motion.div {...slideInFromBottomToSettle} transition={{ delay: 1 }} className="relative -right-5">
        <Image src={'/images/loan.png'} alt="coin catch" width={271} height={248} className="object-cover " />
      </motion.div>
    </div>
  );
};

export default Step12;
