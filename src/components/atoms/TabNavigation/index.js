import React from 'react';

export default function Index({ listMenu, handlerClick, isActive }) {
  return (
    <div className="relative flex justify-center items-center mt-12 mx-auto container max-w-7xl">
      <ul className="relative flex gap-2 bg-zinc-100 shadow-inner p-1.5 rounded-md">
        {listMenu.map((item) => (
          <li
            key={item.id}
            onClick={() => handlerClick(item)}
            className={[
              'relative px-3 md:px-4 py-1 md:text-base cursor-pointer text-sm hover:bg-zinc-50 hover:text-zinc-800 rounded-md flex justify-center items-center transition-all duration-300 tracking-wide leading-relaxed',
              isActive === item.id
                ? 'bg-white shadow-lg shadow-zinc-200 text-zinc-800 font-medium'
                : 'bg-transparent text-zinc-400 font-light ',
            ].join(' ')}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
