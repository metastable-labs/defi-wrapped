import Image from 'next/image';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { StarIcon } from '@/public/icons';

const Step7 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const smallestTransaction = metrics?.transactionActivity.smallestTransaction.value?.toLocaleString();

  return (
    <div className="h-full w-full flex flex-col gap-8 items-center justify-between relative pt-52">
      <div className="flex flex-col gap-3.5">
        <div className="relative">
          <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium relative">
            While staying <br /> grounded <br /> with a
          </p>

          <div className="absolute bottom-0 left-9 z-10 scale-50">
            <StarIcon duration={3} />
          </div>
        </div>

        <div className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center">
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${smallestTransaction}</span>
        </div>

        <p className="text-[38px] leading-[40.28px] text-center text-650 font-medium">
          micro- <br /> transaction
        </p>
      </div>

      <div className="absolute bottom-16 left-0">
        <Image src="/images/search-pie.png" alt="Search Pie" width={350} height={350} className="object-cover w-full" />
      </div>

      <div className="absolute bottom-28 left-20 z-10 scale-75">
        <StarIcon duration={3} />
      </div>

      <div className="absolute bottom-20 right-14 z-10 scale-50">
        <StarIcon duration={3} />
      </div>
    </div>
  );
};

export default Step7;
