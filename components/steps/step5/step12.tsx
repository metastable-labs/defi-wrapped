import Image from 'next/image';

const Step12 = () => {
  return (
    <div className="h-full w-full flex flex-col items-center relative pt-60 gap-16">
      <h1 className="text-[55px] leading-[55px] text-center text-white font-medium relative z-50">
        Lending & <br /> Borrowing
      </h1>

      <div className="relative -right-5">
        <Image src={'/images/loan.png'} alt="coin catch" width={271} height={248} className="object-cover " />
      </div>
    </div>
  );
};

export default Step12;
