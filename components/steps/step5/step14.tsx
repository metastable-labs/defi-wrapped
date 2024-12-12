import Image from 'next/image';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { StarIcon } from '@/public/icons';

const Step14 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const lent = metrics?.lendingBorrowing?.totalSupplied.toLocaleString();
  const borrowed = metrics?.lendingBorrowing?.totalBorrowed.toLocaleString();
  return (
    <div className="h-full w-full flex flex-col gap-3.5 justify-between items-center relative pt-60">
      <div className="flex flex-col items-center justify-center gap-3.5">
        <h1 className="text-[38px] leading-[40.28px] text-center text-white font-medium">You lent</h1>

        <div className="px-8 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center relative">
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${lent}</span>

          <div className="absolute -top-0 -left-0 z-10">
            <StarIcon duration={5} width={17} height={17} />
          </div>
        </div>

        <p className="text-[38px] leading-[40.28px] text-center text-white font-medium">and borrowed</p>

        <div className="px-8 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center">
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${borrowed}</span>
        </div>
      </div>

      <div className="-mt-5 relative">
        <Image src={'/images/slip.png'} alt="Slip Image" width={375} height={500} className="h-full object-cover" quality={100} />

        <div className="absolute bottom-44 left-0 z-10 rotate-45">
          <StarIcon duration={6} width={23} height={23} />
        </div>

        <div className="absolute bottom-14 right-14 z-10">
          <StarIcon duration={4} width={12} height={12} />
        </div>
      </div>
    </div>
  );
};

export default Step14;
