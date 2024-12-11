import useSystemFunctions from '@/hooks/useSystemFunctions';

const Step11 = () => {
  const {
    metricsState: { metrics },
  } = useSystemFunctions();

  const earned = 56_000?.toLocaleString();
  const aero = 6_000?.toLocaleString();
  return (
    <div className="h-full w-full flex flex-col gap-2.5 justify-center items-center relative">
      <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">You earned</span>

      <div className="px-4 h-[62px] rounded-[40px] bg-400 border-[3px] border-50 flex items-center justify-center">
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">${earned}</span>
      </div>

      <p className="text-[38px] leading-[40.28px] text-center text-50 font-medium">
        amount from <br /> trading fees <br /> and
      </p>

      <div className="px-4 h-[62px] rounded-[40px] bg-750 border-[3px] border-50 flex items-center justify-center">
        <span className="text-[38px] leading-[40.28px] text-center text-50 font-medium">{aero} AERO</span>
      </div>

      <p className="text-[38px] leading-[40.28px] text-center text-650 font-medium">
        <span className="text-50">from</span> Aero <br /> token <br /> Emissions
      </p>
    </div>
  );
};

export default Step11;
