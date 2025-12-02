"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export function Logo({ width, height, className }: Props) {
  const { theme } = useTheme();
  return (
    <Image
      src={`/${theme === "dark" ? "icon-dark.svg" : "icon-light.svg"}`}
      alt="Logo"
      width={width || 50}
      height={height || 50}
      className={className}
    />
  );
}
