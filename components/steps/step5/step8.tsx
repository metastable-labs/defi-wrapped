import Image from 'next/image';
import { motion } from 'framer-motion';

import useWindowHeight from '@/hooks/useWindowHeight';
import { StarIcon } from '@/public/icons';
import { slideInFromTopToSettle, slideInFromBottomToSettle } from '@/utils/helpers';

const Step8 = () => {
  const windowHeight = useWindowHeight();
  return (
    <div
      className="h-full w-full flex flex-col items-center relative gap-16"
      style={{
        paddingTop: windowHeight! < 700 ? `${windowHeight! * 0.15}px` : `${windowHeight! * 0.2}px`,
        gap: windowHeight! < 700 ? '40px' : '64px',
      }}
    >
      <div className="relative">
        <motion.h1 {...slideInFromTopToSettle} className="text-[55px] leading-[55px] text-center text-50 font-medium relative">
          Trading <br /> Patterns
        </motion.h1>

        <div className="absolute top-6 -right-14 z-10">
          <StarIcon duration={6} fill="#C1FF2F" width={43} height={43} />
        </div>
      </div>

      <motion.div {...slideInFromBottomToSettle} transition={{ delay: 1 }} className="relative">
        <motion.div
          animate={{ rotate: [0, -10, 5, 0] }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            },
          }}
        >
          <Image src={'/images/coin-catch.png'} alt="coin catch" width={500} height={500} className="object-cover w-full" />
        </motion.div>

        <div className="absolute top-5 left-20 z-10">
          <StarIcon duration={5} fill="#C1FF2F" width={23} height={23} />
        </div>

        <div className="absolute top-32 right-[75px] z-10">
          <StarIcon duration={3.5} fill="#C1FF2F" width={11} height={11} />
        </div>
      </motion.div>
    </div>
  );
};

export default Step8;
