import Image from 'next/image';
import { motion } from 'framer-motion';

import { slideInFromTopToSettle, slideInFromBottomToSettle } from '@/utils/helpers';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const Step12 = () => {
  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();
  return (
    <div
      className="h-full w-full flex flex-col items-center relative"
      style={{
        paddingTop: windowInnerHeight! < 700 ? `${windowInnerHeight! * 0.25}px` : `${windowInnerHeight! * 0.3}px`,
        gap: windowInnerHeight! < 700 ? '40px' : '64px',
      }}
    >
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
