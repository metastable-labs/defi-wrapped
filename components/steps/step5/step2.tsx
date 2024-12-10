import { motion } from 'framer-motion';
import CircleStack from '@/assets/circle-stack';
import { StarIcon } from '@/public/icons';

const Step2 = () => {
  return (
    <div className="h-full w-full flex flex-col gap-2 justify-center items-center relative">
      <h1 className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
        Your most <br /> frequent <br /> destination was
      </h1>

      <div className="px-4 h-[62px] rounded-[40px] bg-450 border-[3px] border-50 flex items-center justify-center">
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">Aerodome</span>
      </div>

      <h1 className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
        where you <br /> executed over
      </h1>

      <div className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center relative">
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{(3_670).toLocaleString()}</span>

        <div className="absolute -top-2 -right-3 scale-95">
          <StarIcon duration={5} />
        </div>

        <div className="absolute -bottom-2 -left-3 scale-[.60]">
          <StarIcon />
        </div>
      </div>

      <span className="text-[38px] leading-[40.28px] text-center text-600 font-medium">transactions</span>

      <div className="absolute bottom-28 right-[40%] scale-50 z-10">
        <StarIcon duration={5} />
      </div>

      <div className="absolute bottom-5 flex items-center justify-between w-full">
        <CircleStack />
        <motion.div initial={false} animate={{ rotateY: 180 }} transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <CircleStack />
        </motion.div>
      </div>
    </div>
  );
};

export default Step2;
