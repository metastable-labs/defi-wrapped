import Image from 'next/image';
import { motion } from 'framer-motion';

import { StarAltIcon } from '@/public/icons';
import DWButton from '../UI/button';

const Step4 = ({ onNext }: StepProps) => {
  return (
    <div className="bg-background-250 h-screen max-h-screen overflow-hidden relative">
      <div className="relative z-20 flex flex-col justify-center items-center gap-4 mt-60">
        <h4 className="text-[38px] leading-[40.28px] font-medium text-center text-50">
          Ready to see <br /> {"how you DeFi'd?"}
        </h4>

        <DWButton title="Show me!" onClick={onNext} variant="secondary" bounceOnRender />
      </div>

      <div className="absolute -bottom-14 left-0 right-0 flex justify-center items-center gap-4 p-4 ">
        <Image src="/images/flag.png" width={500} height={500} alt="Step 4" className="w-full object-cover" />
      </div>

      <motion.div
        animate={{
          opacity: [0, 1, 1, 0, 0, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[269px] right-9"
      >
        <StarAltIcon />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0, 1, 0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-36 left-[75px] rotate-[-33.759deg]"
      >
        <StarAltIcon width={31} height={31} fill="#000" />
      </motion.div>
    </div>
  );
};

export default Step4;
