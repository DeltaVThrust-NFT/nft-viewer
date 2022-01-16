import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={78}
    height={78}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="arrow"
    {...props}
  >
    <path
      d="M61.75 35.75H23.205l11.797-14.17a3.254 3.254 0 1 0-5.005-4.16l-16.25 19.5c-.109.155-.207.318-.292.487 0 .163 0 .26-.228.423-.147.373-.224.77-.227 1.17.003.4.08.797.227 1.17 0 .163 0 .26.228.422.085.17.183.333.293.488l16.25 19.5a3.249 3.249 0 0 0 2.502 1.17 3.25 3.25 0 0 0 2.502-5.33L23.205 42.25H61.75a3.25 3.25 0 1 0 0-6.5Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
