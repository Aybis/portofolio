import React from 'react';

export default function Index({ listMenu, handlerClick, menuActive }) {
  return (
    <ul className="relative flex gap-4 justify-center items-center p-4 b">
      {listMenu.map((item, index) => (
        <li
          onClick={() => handlerClick(item)}
          className={[
            'relative box-border text-sm md:text-base px-4 py-2 rounded-md border border-transparent flex justify-center transition-all duration-300 cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-lg shadow-gray-200',
            menuActive === item
              ? 'bg-gray-800 text-white shadow-lg border-none shadow-gray-200 font-medium leading-relaxed text-sm tracking-wide'
              : 'border-gray-200 text-gray-400 font-light',
          ].join(' ')}
          key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
