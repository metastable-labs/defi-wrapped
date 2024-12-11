import Image from 'next/image';

import { StarIcon } from '@/public/icons';

const Step8 = () => {
  return (
    <div className="h-full w-full flex flex-col items-center relative pt-60 gap-16">
      <div className="relative">
        <h1 className="text-[55px] leading-[55px] text-center text-50 font-medium relative">
          Trading <br /> Patterns
        </h1>

        <div className="absolute top-6 -right-14 z-10">
          <StarIcon duration={6} fill="#C1FF2F" width={43} height={43} />
        </div>
      </div>

      <div className="relative">
        <Image src={'/images/coin-catch.png'} alt="coin catch" width={500} height={500} className="object-cover w-full" />

        <div className="absolute top-5 left-20 z-10">
          <StarIcon duration={5} fill="#C1FF2F" width={23} height={23} />
        </div>

        <div className="absolute top-32 right-[75px] z-10">
          <StarIcon duration={3.5} fill="#C1FF2F" width={11} height={11} />
        </div>
      </div>
    </div>
  );
};

export default Step8;
