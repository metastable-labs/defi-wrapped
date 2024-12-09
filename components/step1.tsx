/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import Logo from '@/assets/logo';
import GlassesIcon from '@/assets/glasses';
import DollarIcon from '@/assets/dollar';

const boxes = [
  { text: 'Uniswap', color: '#B14DFF', delay: 0, classes: 'bottom-2 left-0 px-[17px]', rotate: 10 },
  { text: 'Aerodrome', color: '#FFC03E', delay: 0.2, classes: 'bottom-10 md:bottom-9 left-[22.5%] px-[17px]', rotate: 35 },
  { text: 'Spark', color: '#509CFE', delay: 0.4, classes: 'bottom-1 right-0 px-[19px]', rotate: -10 },
  { text: 'Aave', color: '#FF335C', delay: 0.4, classes: 'bottom-20 left-0 px-[14px]', rotate: -10 },
  { text: 'Morpho', color: '#FF335C', delay: 0.7, classes: 'bottom-24 -right-3 px-[28px] md:px-[36px]', rotate: -35 },
  { text: 'Harvest Finance', color: '#509CFE', delay: 1, classes: 'bottom-[140px] left-0 px-[19px]', rotate: 8 },
  { text: 'Moonwell', color: '#C1FF2F', delay: 1, classes: 'bottom-[194px] md:bottom-[192px] right-0 px-[19px]', rotate: -2 },
];

const Step1 = () => {
  return (
    <div className="bg-background-50 h-screen max-h-screen relative overflow-hidden">
      <div className="pt-16 flex flex-col items-center justify-center">
        <Logo />

        <div className="relative mt-[86px]">
          <h1 className="z-10 text-[65px] leading-[60px] text-center text-50 font-medium custom-font-feature">DeFi Wrapped</h1>

          <div className="absolute z-20 top-8 left-16 md:left-20">
            <GlassesIcon />
          </div>

          <div className="absolute z-20 top-10 right-[96px] md:right-[105px]">
            <DollarIcon />
          </div>
        </div>

        <div className="mt-[30px] py-[15px] px-[25px] rounded-3xl border-2 border-100 flex justify-center items-center">
          <h6 className="text-xs font-medium text-150">Powered by useliquid.xyz</h6>
        </div>
      </div>

      {boxes.map((box, index) => (
        <Box key={index} {...box} />
      ))}
    </div>
  );
};

const Box = ({ text, color, delay, classes, rotate }: { text: string; color: string; delay: number; classes: string; rotate: number }) => {
  return (
    <motion.div
      className={`absolute py-2 border-2 border-50 rounded-full flex justify-center items-center ${classes}`}
      style={{
        backgroundColor: color,
      }}
      initial={{ y: -800, opacity: 0, rotate }}
      animate={{ y: 0, opacity: 1, rotate }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 10,
        delay,
        duration: 2,
      }}
    >
      <p className="text-[30px] font-bold text-50">{text}</p>
    </motion.div>
  );
};

export default Step1;
