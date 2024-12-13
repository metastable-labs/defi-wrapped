import Image from 'next/image';
import { motion } from 'framer-motion';

import { StarIcon } from '@/public/icons';
import { slideInFromTopToSettle, slideInFromBottomToSettle } from '@/utils/helpers';

const Step13 = () => {
  return (
    <div className="h-full w-full flex flex-col items-center relative pt-60 gap-16">
      <div className="relative">
        <motion.p {...slideInFromTopToSettle} className="text-[38px] leading-[40.28px] text-center text-white font-medium">
          You&apos;ve <br /> mastered the <br /> art of capital <br /> efficiency this <br /> year
        </motion.p>

        <div className="absolute top-[76px] left-10 z-10">
          <StarIcon duration={6} width={17} height={17} />
        </div>
      </div>

      <motion.div
        {...slideInFromBottomToSettle}
        transition={{
          delay: 1,
        }}
        className="relative"
      >
        <Image src={'/images/money-bag.png'} alt="money bag" width={229} height={255} quality={100} className="object-cover" />

        <div className="absolute top-2 left-[86px] z-10 rotate-45">
          <StarIcon duration={10} width={24} height={24} />
        </div>

        <div className="absolute bottom-14 right-0 z-10">
          <StarIcon duration={3} width={32} height={32} />
        </div>

        <div className="absolute bottom-5 left-3.5 z-10">
          <StarIcon duration={5} width={36} height={36} />
        </div>

        <div className="absolute bottom-1 -right-5 z-10">
          <StarIcon duration={8} width={11} height={11} />
        </div>
      </motion.div>
    </div>
  );
};

export default Step13;
