import React from 'react';

export default function Index({ paragraph }) {
  return (
    <p className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg font-light text-zinc-200 tracking-wide transition-all duration-300 leading-relaxed">
      {paragraph}
    </p>
  );
}
