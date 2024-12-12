import Image from 'next/image';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { StarIcon } from '@/public/icons';

const Step16 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const paid = metrics?.lendingBorrowing?.interest?.paid.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="h-full w-full flex flex-col gap-16 justify-center items-center relative">
      <div className="flex flex-col items-center justify-center gap-3.5">
        <div className="relative">
          <p className="text-[38px] leading-[40.28px] text-center text-white font-medium">While paying</p>

          <div className="absolute -bottom-1.5 left-10 z-10">
            <StarIcon duration={7} width={17} height={17} />
          </div>
        </div>

        <div className="px-6 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center">
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${paid}</span>
        </div>

        <p className="text-[38px] leading-[40.28px] text-center text-white font-medium">
          in borrowing <br /> cost
        </p>
      </div>

      <div className="relative">
        <Image src={'/images/dollar-coins.png'} alt="Fly Coin" width={218} height={142.4} className="object-cover" quality={100} />

        <div className="absolute -bottom-6 -left-2.5 z-10">
          <StarIcon duration={6} width={23} height={23} />
        </div>

        <div className="absolute -bottom-12 -right-5 z-10">
          <StarIcon duration={6} width={12} height={12} />
        </div>
      </div>
    </div>
  );
};

export default Step16;
