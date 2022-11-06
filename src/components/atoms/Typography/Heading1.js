import React from 'react';

export default function Heading1({ heading, addClass }) {
  return (
    <h1
      className={[
        'text-4xl font-bold text-gray-900 mt-1 tracking-wide',
        addClass,
      ].join(' ')}>
      {heading}
    </h1>
  );
}
