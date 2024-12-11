import { StarIcon } from '@/public/icons';
import Treasure from '@/assets/treasure';

const Step6 = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8 items-center relative pt-52">
      <div className="flex flex-col gap-3.5">
        <div className="relative">
          <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium relative">
            Your <span className="text-650">portfolio</span> <br /> reached its <br /> peak with a
          </p>

          <div className="absolute bottom-4 left-8 z-10 scale-50">
            <StarIcon duration={3} />
          </div>
        </div>

        <div className="px-4 h-[62px] rounded-[40px] bg-white border-[3px] border-50 flex items-center justify-center">
          <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${(2_000_000).toLocaleString()}</span>
        </div>

        <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
          transactions <br /> in <span className="text-650">December.</span>
        </p>
      </div>

      <div className="mt-5 relative">
        <Treasure />

        <div className="absolute bottom-6 -left-2 z-10 scale-90 rotate-45">
          <StarIcon duration={5} />
        </div>

        <div className="absolute bottom-6 left-[125px] scale-[.45] z-10">
          <StarIcon duration={6} />
        </div>
      </div>
    </div>
  );
};

export default Step6;
