import * as React from "react";
const Burger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={18}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 16h17v2H0zM0 8h24v2H0zM0 0h24v2H0z" />
  </svg>
);
export default Burger;
