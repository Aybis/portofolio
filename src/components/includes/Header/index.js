import React from 'react';

export default function Index() {
  const menu = ['Profil', 'Skills', 'Portofolio', 'CV'];

  return (
    <header className="fixed bottom-0 md:bottom-auto z-30 md:top-0 p-4 md:px-4 md:py-6 inset-x-0 bg-white/30 w-full backdrop-blur-md shadow-lg shadow-gray-200/40 border-t md:border-b border-gray-200">
      <div className="relative mx-auto container max-w-7xl flex md:justify-between">
        <h1 className="text-2xl font-medium text-gray-900 hidden md:block">
          AMA
        </h1>
        <ul className="relative grid grid-cols-4 gap-4 place-items-center content-center w-full md:w-fit md:mx-0 mx-14">
          {menu.map((item, index) => (
            <li
              key={index}
              className="inline-block mr-4 px-2 w-full text-center">
              <a
                href={`#${item}`}
                className="text-gray-800 hover:text-gray-900 border-transparent border-b-2 hover:border-gray-600 transition-all duration-300 text-base leading-relaxed tracking-wide">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
