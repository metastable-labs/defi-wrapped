import Image from 'next/image';

import { StarIcon } from '@/public/icons';

const Step9 = () => {
  return (
    <div className="h-full w-full flex flex-col gap-14 items-center relative pt-52">
      <div className="flex flex-col gap-3.5">
        <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
          Your signature <br /> trading pair was
        </p>

        <div className="px-4 h-[62px] rounded-[40px] bg-400 border-[3px] border-50 flex items-center justify-center relative">
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{'ETH/USDC'}</span>

          <div className="absolute -top-2 -right-3 z-10">
            <StarIcon duration={5} fill="#FFFFFF" width={36} height={36} />
          </div>

          <div className="absolute -bottom-2 left-0 z-10">
            <StarIcon duration={7} fill="#FFFFFF" width={23} height={23} />
          </div>
        </div>

        <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
          contributing to <br /> your total <br /> trading volume <br /> of <span className="text-650">${(100_000).toLocaleString()}.</span>
        </p>
      </div>

      <Image src={'/images/double-coins.png'} alt="double coins" width={300} height={269} quality={100} className="object-cover" />
    </div>
  );
};

export default Step9;
