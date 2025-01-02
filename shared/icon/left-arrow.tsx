const LeftArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 520" // Match the viewBox of RightArrowIcon
      className={props.className}
      {...props}
    >
      <path
        d="M306.668 0C424.488 0 520 95.512 520 213.332s-95.512 213.336-213.332 213.336-213.336-95.516-213.336-213.336C93.465 95.566 188.898.132 306.668 0zm0 405.332c106.039 0 192-85.96 192-192 0-106.039-85.961-192-192-192-106.04 0-192 85.961-192 192 .121 105.988 86.012 191.879 192 192zm0 0"
        fill="currentColor"
      />
      <path
        d="M331.645 130.637c4.437-3.88 11.175-3.426 15.054 1.008 3.875 4.437 3.422 11.175-1.012 15.054l-76.156 66.633 76.16 66.637c4.438 3.879 4.887 10.617 1.012 15.05-3.879 4.438-10.617 4.891-15.055 1.012l-85.332-74.668a10.67 10.67 0 0 1 0-16.063z"
        fill="currentColor"
      />
    </svg>
  );
  
  export default LeftArrowIcon;
  