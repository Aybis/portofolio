import React from 'react';

export default function Index({ children, addClass }) {
  return (
    <div className={['relative h-auto lg:h-screen w-full', addClass].join(' ')}>
      {children}
    </div>
  );
}
