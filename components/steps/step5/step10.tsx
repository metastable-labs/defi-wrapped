import { motion } from 'framer-motion';

const colors: Record<string, string> = {
  'eth/usdc': '#FF4C61',
  'aero/usdc': '#B14DFF',
  'btc/usdc': '#FFC03E',
};

const Step10 = () => {
  const pools = [
    { name: 'ETH/USDC', id: 'eth/usdc' },
    { name: 'AERO/USDC', id: 'aero/usdc' },
    { name: 'cbBTC/USDC', id: 'btc/usdc' },
  ];
  return (
    <div className="h-full w-full flex flex-col gap-14 items-center relative pt-52">
      <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
        You provided <br /> <span className="text-650">liquidity</span> to pools
      </p>

      <div className="relative">
        <div className="w-full pt-10 flex items-center justify-center flex-col gap-2">
          {pools.map(({ name, id }, index) => (
            <motion.div
              key={id}
              className="min-w-40 px-6 h-[62px] flex items-center justify-center relative rounded-full border-[3px] border-black"
              style={{
                backgroundColor: colors[id],
                zIndex: [0, 2, 4].includes(index) ? 2 : 1,
              }}
              animate={{
                rotate: [0, [0, 2, 4].includes(index) ? 10 : -10, [0, 2, 4].includes(index) ? -10 : 10, 0],
              }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              <span className="text-50 text-4xl text-center font-medium">{name}</span>
            </motion.div>
          ))}
        </div>

        <div className="absolute w-full h-[364px] flex flex-col items-center justify-center top-0">
          <div className="flex-1 w-4 bg-white border-t-[3px] border-x-[3px] border-black" />
          <div className="w-[90px] h-5 bg-white border-[3px] border-black" />
        </div>
      </div>
    </div>
  );
};

export default Step10;
