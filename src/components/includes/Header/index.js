import React from 'react';

export default function Index() {
  const menu = ['Profil', 'Skills', 'Portofolio', 'CV'];

  return (
    <header className="top-0 hidden px-4 py-6 right-0 box-border z-10 bg-white/30 w-full backdrop-blur-md shadow-lg shadow-gray-200/40">
      <div className="relative mx-auto container max-w-7xl flex justify-between">
        <h1 className="text-2xl font-medium text-gray-900">AMA</h1>
        <ul className="relative grid grid-cols-4 gap-4 place-items-center content-center">
          {menu.map((item, index) => (
            <li
              key={index}
              className="inline-block mr-4 px-2 w-full text-center">
              <a
                href={`#${item}`}
                className="text-gray-800 hover:text-gray-900 pb-2 border-transparent border-b-2 hover:border-gray-600 transition-all duration-300 text-base leading-relaxed tracking-wide">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
