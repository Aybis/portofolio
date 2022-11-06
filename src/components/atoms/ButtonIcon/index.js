import React from 'react';

export default function Index(props) {
  return (
    <div className="relative p-2 bg-zinc-200 cursor-pointer hover:shadow-lg shadow-gray-200/50 transition-all duration-300 hover:bg-zinc-50 rounded-md">
      <img src={props.item.icon} alt={props.index} className="h-6 w-full" />
    </div>
  );
}
