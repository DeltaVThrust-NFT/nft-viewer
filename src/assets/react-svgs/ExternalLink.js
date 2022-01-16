import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={45}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="external link"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M37.969 28.125h-2.813a1.406 1.406 0 0 0-1.406 1.406v9.844H5.625V11.25h12.656a1.406 1.406 0 0 0 1.407-1.406V7.03a1.406 1.406 0 0 0-1.407-1.406H4.22A4.219 4.219 0 0 0 0 9.844V40.78A4.219 4.219 0 0 0 4.219 45h30.937a4.22 4.22 0 0 0 4.219-4.219v-11.25a1.406 1.406 0 0 0-1.406-1.406ZM42.89 0H31.64c-1.879 0-2.817 2.277-1.494 3.604l3.14 3.14-21.422 21.413a2.11 2.11 0 0 0 0 2.989l1.993 1.989a2.11 2.11 0 0 0 2.988 0l21.411-21.417 3.14 3.136c1.318 1.318 3.603.395 3.603-1.495V2.11A2.11 2.11 0 0 0 42.89 0Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h45v45H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
