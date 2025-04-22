"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure correct theme detection
  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");

  if (!mounted) {
    return <div className="w-[240px] md:w-[240px]  lg:w-[360px] h-auto" />;
  }

  return (
    <Link href="/" aria-label="NeoAutomate Home">
      <Image
        className="w-[240px] md:w-[240px] lg:w-[360px] h-auto"
        src={isDark ? "/logo-neo-dark.png" : "/logo-neo-light.png"}
        alt="NeoAutomate Logo"
        width={360}
        height={0}
        priority
      />
    </Link>
  );
}
