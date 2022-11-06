import React from 'react';

export default function Paragraph({ paragraph, addClass }) {
  return (
    <p
      className={[
        'text-gray-700 leading-relaxed tracking-wide font-extralight w-auto',
        addClass,
      ].join(' ')}>
      {paragraph}
    </p>
  );
}
