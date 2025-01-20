"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export function Logo({ width, height, className }: Props) {
  const { theme, systemTheme } = useTheme();

  return (
    <>
      {theme === "dark" || (systemTheme === "dark" && theme === "system") ? (
        <Image
          src="/icon-dark.svg"
          alt="Logo"
          width={width || 50}
          height={height || 50}
          className={className}
        />
      ) : (
        <Image
          src="/icon-light.svg"
          alt="Logo"
          width={width || 50}
          height={height || 50}
          className={className}
        />
      )}
    </>
  );
}
