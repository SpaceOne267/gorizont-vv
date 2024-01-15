import * as React from "react";
const SvgCar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M5.491 10.375h8.018c.374-.023 1.243-.093 1.729-.19v.33c0 .268.238.485.532.485h2.014c.294 0 .532-.217.532-.486V5.9c0-.22-.065-.763-.323-1.18.836-.26 1.007-.503 1.007-.867 0-.365-.266-.694-.893-.694H16.91l-.99-1.61C15.402.705 14.44.168 13.383.133L9.5 0 5.617.133C4.559.169 3.598.705 3.08 1.548l-.99 1.61H.893c-.627 0-.893.33-.893.694 0 .364.171.607 1.007.867-.258.417-.323.96-.323 1.18v4.615c0 .269.238.486.532.486H3.23c.294 0 .532-.217.532-.486v-.33c.486.098 1.355.168 1.729.191ZM9.5.885l-4.016.163c-.678.028-1.288.384-1.6.933l-.73 1.28h12.692l-.73-1.28c-.312-.55-.922-.905-1.6-.933L9.5.885Zm0 5.951H7.581c-.21 0-.38.155-.38.347v.008c0 .166.13.31.309.34l1.99.346 1.99-.345c.18-.032.309-.175.309-.341v-.008c0-.192-.17-.347-.38-.347H9.5Zm-3.686.711c0-.728-.073-.982-1.03-1.232-.813-.211-1.725-.399-1.82-.399-.19 0-.361.278.19 1.041.44.611 2.66 1.289 2.66.59Zm7.372 0c0-.728.073-.982 1.03-1.232.813-.211 1.725-.399 1.82-.399.19 0 .361.278-.19 1.041-.44.611-2.66 1.289-2.66.59Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCar;