import React from 'react';

export default function Index({ heading }) {
  return (
    <h1 className="text-xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-zinc-50 tracking-wide mb-3 transition-all duration-300">
      {heading}
    </h1>
  );
}
