const OnlyRightArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50" // Ensure correct viewBox
      className={props.className}
      {...props}
    >
   <path
      d="M42.7 29.6 26.2 13.1l-2.4-2.4c-1.8-1.8-4.7 1-2.8 2.8L37.5 30l.9.9-15 15-2.3 2.3c-1.8 1.8 1 4.7 2.8 2.8l16.4-16.4 2.3-2.3c.9-.6.9-1.9.1-2.7z"
      fill="currentColor"
    />
    </svg>
  );
  
  export default OnlyRightArrowIcon;
  