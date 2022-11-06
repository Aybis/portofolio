import React from 'react';
import { imageApiAvatarUser } from '../../../utils/helpers/assetHelpers';

export default function Index(props) {
  return (
    <div className="relative flex gap-4 mt-4 bg-white p-4 rounded-md text-zinc-800 hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src={props?.item?.image ?? imageApiAvatarUser('SMA')}
          alt={props.item.image}
          className="h-14"
        />
      </div>

      <div className="relative">
        <h3 className="text-lg font-semibold  leading-relaxed">
          {props.item.name}
        </h3>
        <p className="text-sm font-light tracking-wide leading-relaxed">
          {props.item.year}
        </p>
        <p className="text-base font-light tracking-wide leading-relaxed">
          {props.item.major}
        </p>
        {props.item.gpa && (
          <p className="text-base font-normal tracking-wide leading-relaxed">
            {props.item.title} - {props.item.gpa + ' / 4.00'}
          </p>
        )}
      </div>
    </div>
  );
}
