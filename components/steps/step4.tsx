import Image from 'next/image';
import { motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useOffsetValue from '@/hooks/useOffsetValue';
import { StarAltIcon } from '@/public/icons';
import DWButton from '../UI/button';
import Clouds from '@/assets/clouds';

const Step4 = ({ onNext }: StepProps) => {
  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const bottom = useOffsetValue(windowInnerHeight!, {
    small: -0.2,
    medium: -0.13,
    large: -0.025,
  });

  return (
    <div
      className="bg-background-250 overflow-hidden relative"
      style={{ height: `${windowInnerHeight!}px`, maxHeight: `${windowInnerHeight!}px` }}
    >
      <div className="relative z-20 flex flex-col justify-center items-center gap-4 mt-60">
        <h4 className="text-32 md:text-38 font-medium text-center text-50">
          Ready to see <br /> {"how you DeFi'd?"}
        </h4>

        <DWButton title="Show me!" onClick={onNext} variant="secondary" bounceOnRender />
      </div>

      <div className="absolute -bottom-[2.5%] left-0 right-0 flex justify-center items-center gap-4 p-4 z-10" style={{ bottom }}>
        <Image src="/images/flag.png" width={330} height={400} alt="Step 4" className="object-cover" />
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
        className="absolute bottom-[269px] right-9 z-"
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
        className="absolute bottom-36 left-[75px] rotate-[-33.759deg] z-10"
      >
        <StarAltIcon width={31} height={31} fill="#000" />
      </motion.div>

      <div className="w-full h-full absolute top-0 left-0">
        <Clouds fill="#B8D5FF" numberOfClouds={8} />
      </div>
    </div>
  );
};

export default Step4;
