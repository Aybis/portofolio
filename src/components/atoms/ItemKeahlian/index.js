import React from 'react';

export default function Index(props) {
  return (
    <div
      key={props.item.name}
      className="relative border border-gray-200 rounded-lg p-2 flex justify-center items-center flex-col gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200">
      <img
        src={props.item.image}
        alt={props.item.name}
        className="h-16 object-contain"
      />
    </div>
  );
}
