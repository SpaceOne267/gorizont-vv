import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#4092FF"
      fillRule="evenodd"
      d="M8 23H4l1-10.5H0L8 0l8 12.5h-5L12 23H8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrow;
