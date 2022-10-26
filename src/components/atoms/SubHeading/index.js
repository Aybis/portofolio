import React from 'react';

export default function Index({ subheading }) {
  return (
    <h3 className="text-base md:text-xl xl:text-2xl 2xl:text-3xl text-zinc-200 font-medium tracking-wide mb-0.5 transition-all duration-300">
      {subheading}
    </h3>
  );
}
