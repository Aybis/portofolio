import React from 'react';

export default function Heading2({ heading, addClass }) {
  return (
    <h2
      className={[
        'text-2xl font-bold text-gray-900 mt-1 tracking-wide',
        addClass,
      ].join(' ')}>
      {heading}
    </h2>
  );
}
