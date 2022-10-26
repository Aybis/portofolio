import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function Index({ addClass }) {
  return (
    <button
      className={[
        'group cursor-pointer w-fit shadow-transparent shadow-md hover:shadow-white/70 transition-all duration-300 relative flex gap-2 items-center justify-center px-4 py-2 rounded-md border text-xs  md:text-sm border-white bg-transparent text-white font-medium leading-relaxed tracking-wide uppercase',
        addClass,
      ].join(' ')}>
      View more{' '}
      <ArrowLongRightIcon className="h-6 w-6 group-hover:scale-110 transition-all duration-300" />
    </button>
  );
}
