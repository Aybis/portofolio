import React from 'react';

export default function Index({ children, addClass }) {
  return (
    <div
      className={[
        'relative flex flex-col justify-center h-auto lg:h-screen',
        addClass,
      ].join(' ')}>
      {children}
    </div>
  );
}
