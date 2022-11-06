import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { imageApi } from '../../../utils/helpers/assetHelpers';

export default function Index(props) {
  const [showMore, setshowMore] = useState(false);

  return (
    <div className="relative p-4 bg-white hover:shadow-lg transition-all duration-300 hover:shadow-gray-200/50 rounded-lg flex flex-col justify-between max-h-full gap-8">
      <div className="relative max-h-full w-full rounded-lg transition-all duration-300">
        <img
          src={props?.item?.image === '' ? imageApi('APP') : props.item.image}
          alt={props.item.name}
          className="relative object-cover w-full h-44 rounded-lg"
        />
        <div className="relative mt-4 text-zinc-800">
          <h1 className="text-lg font-semibold leading-relaxed">
            {props.item.name}
          </h1>
          <p
            className={[
              'text-sm font-medium leading-relaxed mt-1.5 w-fit px-2 py-1 rounded-md',
              props.item.type === 'Frontend'
                ? 'text-green-700 bg-green-200'
                : props.item.type === 'Fullstack'
                ? 'text-blue-700 bg-blue-200'
                : props.item.type === 'Figma'
                ? 'text-yellow-700 bg-yellow-200'
                : 'text-gray-500',
            ].join(' ')}>
            {props.item.type}
          </p>
          <p
            className={[
              'font-light tracking-wide text-sm leading-relaxed mt-4 max-h-full transition-all duration-500 ease-in-out',
              showMore &&
              props.item.desc.length > 70 &&
              props.item.desc.length < 100
                ? 'h-16'
                : showMore &&
                  props.item.desc.length > 100 &&
                  props.item.desc.length < 170
                ? 'h-28'
                : showMore && props.item.desc.length > 170
                ? 'h-44'
                : 'h-16',
            ].join(' ')}
            onMouseOver={() => setshowMore(true)}
            onMouseLeave={() => setshowMore(false)}>
            {props.item.desc.length > 70
              ? props.item.desc.substring(
                  0,
                  showMore ? props.item.desc.length : 70,
                ) + '...'
              : props.item.desc}
          </p>
        </div>

        <div className="relative mt-4">
          <p className="font-medium text-sm">Stack : </p>
          <ul className="relative flex items-end box-border flex-wrap gap-3 mt-2">
            {props.item.tech.map((itemTech, indexTech) => (
              <li
                key={indexTech}
                className="relative px-2.5 py-1.5 border border-gray-200 bg-zinc-50 text-xs rounded-lg text-zinc-700 leading-relaxed font-light">
                {itemTech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        disabled={props.item.link === ''}
        onClick={() => window.open(props.item.link, '_blank')}
        className="relative box-border disabled:bg-opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 w-full py-3 rounded-lg flex gap-2 justify-center items-center font-semibold leading-relaxed tracking-wide bg-neutral-900 text-white text-sm hover:scale-105 transition-all duration-300">
        Ke Aplikasi <ArrowUpRightIcon className="h-4" />
      </button>
    </div>
  );
}
