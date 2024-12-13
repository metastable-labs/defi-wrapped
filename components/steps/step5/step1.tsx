import Image from 'next/image';
import { motion } from 'framer-motion';

import { StarIcon } from '@/public/icons';
import { slideInFromTopToSettle, slideInFromLeftToSettle } from '@/utils/helpers';

const Step1 = () => {
  return (
    <div className="h-full w-full flex flex-col items-center relative pt-60">
      <motion.h1 {...slideInFromTopToSettle} className="text-[55px] leading-[55px] text-center text-50 font-medium relative z-50">
        Protocol <br /> Mastery
      </motion.h1>

      <motion.div {...slideInFromLeftToSettle} transition={{ delay: 1 }} className="absolute bottom-28 md:bottom-36 left-0">
        <Image src={'/images/chess-king.png'} alt="Chess King" width={400} height={400} className="object-cover w-full h-full" />
      </motion.div>

      <div className="absolute bottom-[230px] right-20 scale-75">
        <StarIcon duration={3} />
      </div>

      <div className="absolute bottom-36 left-[15%]">
        <StarIcon duration={6} />
      </div>

      <div className="absolute bottom-28 right-24 scale-50">
        <StarIcon duration={5} />
      </div>

      <div className="absolute top-96 right-5 scale-50">
        <StarIcon duration={10} />
      </div>
    </div>
  );
};

export default Step1;
