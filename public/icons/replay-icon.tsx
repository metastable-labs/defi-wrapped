const ReplayIcon = ({ fill = '#1E293B', width = 18, height = 18 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
    <path d="M10.485 3.35248L9 1.5" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M14.3175 5.85005C15.15 6.96005 15.6675 8.33255 15.6675 9.83255C15.6675 13.515 12.6825 16.5001 9.00003 16.5001C5.31753 16.5001 2.33252 13.515 2.33252 9.83255C2.33252 6.15005 5.31753 3.16504 9.00003 3.16504C9.51003 3.16504 10.005 3.23258 10.485 3.34508"
      stroke={fill}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ReplayIcon;
