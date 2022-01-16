import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={1728}
    height={233}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="wave"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 68.875h36c36 0 108 0 180-22.179 72-21.545 144-65.27 216-38.021C504 35.923 576 134.779 648 172.8s144 16.476 216-21.546c72-38.655 144-93.152 216-88.082 72 5.703 144 71.607 216 76.676 72 5.703 144-48.794 216-65.27s144 5.07 180 16.476l36 10.773V233H0V68.875Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={864}
        y1={0}
        x2={864}
        y2={233}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.281} stopColor="#09F" />
        <stop offset={1} stopColor="#044977" stopOpacity={0.91} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
