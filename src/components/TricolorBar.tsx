/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface TricolorBarProps {
  className?: string;
  height?: string;
}

export const TricolorBar: React.FC<TricolorBarProps> = ({
  className = "",
  height = "h-1.5",
}) => {
  return (
    <div
      className={`w-full flex ${height} ${className} overflow-hidden`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="w-1/2 bg-[#F2CD28]" />
      <div className="w-1/4 bg-[#283B7B]" />
      <div className="w-1/4 bg-[#E81C24]" />
    </div>
  );
};
