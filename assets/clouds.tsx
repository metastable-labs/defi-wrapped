const Clouds = ({ fill = '#B8D5FF' }: { fill?: string }) => (
  <div className="w-[427px] h-[417px] relative">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="6" viewBox="0 0 24 6" fill="none" className="absolute top-[75px] left-10">
      <path
        d="M24 5.16096C24 5.16096 23.1613 2.88615 20.4516 3.85085C20.4516 3.85085 18.6678 1.33745 15.3129 2.88614C15.3129 2.88614 13.9501 0.611328 9.82911 0.611328C5.80643 0.611328 4.19354 3.85085 4.19354 3.85085C4.19354 3.85085 0.387099 2.74149 0 5.16096H24Z"
        fill={fill}
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="16" viewBox="0 0 61 16" fill="none" className="absolute top-1 -right-1.5">
      <path
        d="M81 15.355C81 15.355 78.1693 7.67751 69.0242 10.9334C69.0242 10.9334 63.0038 2.45065 51.6812 7.67751C51.6812 7.67751 47.0815 0 33.1732 0C19.5967 0 14.1532 10.9334 14.1532 10.9334C14.1532 10.9334 1.30646 7.18929 0 15.355H81Z"
        fill={fill}
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="13" viewBox="0 0 40 13" fill="none" className="absolute -bottom-32">
      <path
        d="M39.4497 12.4072C39.4497 12.4072 37.1624 6.20359 29.773 8.83442C29.773 8.83442 24.9084 1.98018 15.7595 6.20359C15.7595 6.20359 12.0429 0 0.80468 0C-10.1655 0 -14.5639 8.83442 -14.5639 8.83442C-14.5639 8.83442 -24.9444 5.8091 -26 12.4072H39.4497Z"
        fill={fill}
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="11"
      viewBox="0 0 25 11"
      fill="none"
      className="absolute -bottom-[120px] right-0"
    >
      <path
        d="M51 10.4072C51 10.4072 49.2177 5.57325 43.4597 7.62325C43.4597 7.62325 39.669 2.28226 32.54 5.57324C32.54 5.57324 29.6439 0.739258 20.8869 0.739258C12.3387 0.739258 8.91127 7.62325 8.91127 7.62325C8.91127 7.62325 0.822585 5.26585 0 10.4072H51Z"
        fill={fill}
      />
    </svg>
  </div>
);

export default Clouds;
