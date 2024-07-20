import React from 'react';

const ArrowIcon = ({ width = 8, height = 6, fill = "#333333" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 8 6" fill="none">
    <path d="M4 6L0 0H8L4 6Z" fill={fill} />
  </svg>
);

export default ArrowIcon;
