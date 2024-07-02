import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={28} height={28} fill="white" fillOpacity={0.01} />
    <path
      d="M15 12L18 6H30L33 12H15Z"
      fill="#2F88FF"
      stroke="#000000"
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <rect
      x={4}
      y={12}
      width={40}
      height={30}
      rx={3}
      fill="#2F88FF"
      stroke="#000000"
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <path
      d="M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z"
      fill="#43CCF8"
      stroke="white"
      strokeWidth={4}
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;