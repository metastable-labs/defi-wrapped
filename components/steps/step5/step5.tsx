import { StarIcon } from '@/public/icons';
import CoinsStacked from '@/assets/coins-stacked';

const Step5 = () => {
  return (
    <div className="h-full w-full flex flex-col gap-2 justify-center items-center relative">
      <h1 className="text-[38px] leading-[40.28px] text-center text-50 font-medium">You executed</h1>

      <div className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center relative">
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{(1_000).toLocaleString()}</span>

        <div className="absolute -bottom-5 -left-3 z-10 scale-50">
          <StarIcon duration={3} />
        </div>
      </div>

      <p className="text-[38px] leading-[40.28px] text-center text-650 font-medium">
        transactions <br /> this year <br /> <span className="text-50">averaging</span>
      </p>

      <div className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center relative">
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${(10_000).toLocaleString()}</span>

        <div className="absolute top-2.5 -right-4 scale-95">
          <StarIcon duration={10} />
        </div>
      </div>

      <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">each</span>

      <div className="-mt-5 relative">
        <CoinsStacked />

        <div className="absolute bottom-20 left-9 z-10">
          <StarIcon duration={5} />
        </div>

        <div className="absolute top-28 right-11 scale-[.65] z-10 rotate-45">
          <StarIcon duration={6} />
        </div>

        <div className="absolute bottom-14 -right-4 scale-[.40] z-10">
          <StarIcon duration={4} />
        </div>
      </div>
    </div>
  );
};

export default Step5;
