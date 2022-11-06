import React from 'react';
import { imageApi } from '../../../utils/helpers/assetHelpers';

export default function Index(props) {
  return (
    <div className="relative p-4 bg-white hover:shadow-lg transition-all duration-300 hover:shadow-gray-200/50 rounded-lg justify-between flex flex-col max-h-full">
      <div className="relative h-44 max-h-full w-full rounded-lg mb-24">
        <img
          src={
            props?.item?.image === ''
              ? imageApi(props.item.type)
              : props.item.image
          }
          alt={props.item.name}
          className="relative object-cover w-full h-full rounded-lg"
        />
        <div className="relative mt-4">
          <h1 className="text-lg font-medium leading-relaxed text-zinc-800">
            {props.item.name}
          </h1>
          <p className="text-base font-light text-zinc-400 mt-1">
            {props.item.type}
          </p>
        </div>
      </div>

      <ul className="relative flex items-end box-border flex-wrap gap-3 mt-8">
        {props.item.tech.map((itemTech, indexTech) => (
          <li
            key={indexTech}
            className="relative px-2.5 py-1.5 border border-gray-200 bg-zinc-50 text-sm rounded-lg text-zinc-700 leading-relaxed font-light">
            {itemTech}
          </li>
        ))}
      </ul>
    </div>
  );
}
