import React from 'react';

export default function HeadingCustom({ heading, addClass }) {
  return (
    <h1 className={['text-gray-900 mt-1 tracking-wide', addClass].join(' ')}>
      {heading}
    </h1>
  );
}
