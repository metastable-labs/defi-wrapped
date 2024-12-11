import Image from 'next/image';

import { StarIcon } from '@/public/icons';

const Step15 = () => {
  return (
    <div className="h-full w-full flex flex-col gap-16 justify-center items-center relative">
      <div className="flex flex-col items-center justify-center gap-3.5">
        <div className="relative">
          <p className="text-[38px] leading-[40.28px] text-center text-white font-medium">
            Your lending <br /> strategy <br /> earned you
          </p>

          <div className="absolute bottom-7 left-[32px] z-10">
            <StarIcon duration={6} width={17} height={17} />
          </div>
        </div>

        <div className="px-6 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center">
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${(2_500).toLocaleString()}</span>
        </div>

        <span className="text-[38px] leading-[40.28px] text-center text-white font-medium">in interest</span>
      </div>

      <div className="relative">
        <Image src={'/images/fly-coin.png'} alt="Fly Coin" width={284.6} height={155.6} className="object-cover" quality={100} />

        <div className="absolute bottom-0 left-[30px] z-10">
          <StarIcon duration={6} width={23} height={23} />
        </div>

        <div className="absolute -bottom-8 -right-0.5 z-10">
          <StarIcon duration={6} width={12} height={12} />
        </div>
      </div>
    </div>
  );
};

export default Step15;
