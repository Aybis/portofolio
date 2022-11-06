import React from 'react';
import Header from '../Header';

export default function Index({ children, addClass }) {
  return (
    <div
      className={[
        'relative bg-gradient-to-br from-zinc-50 to-zinc-100 inset-0 min-h-screen max-h-full box-border scroll-smooth',
        addClass,
      ].join(' ')}>
      {/* Sidebar Fixed */}
      <Header />

      {/* Content Profile */}
      <div className="relative p-0">{children}</div>
    </div>
  );
}
