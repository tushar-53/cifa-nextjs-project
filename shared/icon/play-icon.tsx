const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50" // Ensure correct viewBox
      className={props.className}
      {...props}
    >
      <path
        d="M13 41a4.722 4.722 0 0 1-2.386-.653 4.528 4.528 0 0 1-2.28-3.938V11.588a4.528 4.528 0 0 1 2.28-3.938 4.685 4.685 0 0 1 4.711-.036l22 12.412a4.543 4.543 0 0 1 0 7.948l-22 12.412A4.731 4.731 0 0 1 13 41zm0-32a2.715 2.715 0 0 0-1.377.377 2.546 2.546 0 0 0-1.289 2.211v24.824a2.546 2.546 0 0 0 1.289 2.211 2.707 2.707 0 0 0 2.72.021l22-12.412a2.542 2.542 0 0 0 0-4.464l-22-12.412A2.736 2.736 0 0 0 13 9z"
        fill="currentColor" // Use currentColor for dynamic color
      />
    </svg>
  );
  
  export default PlayIcon;
  