import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assets';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-40 h-16 ${className}`}>
      <Image
        src={getAssetPath("/assets/logo.webp")}
        alt="Roo Filmz Logo"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
}
