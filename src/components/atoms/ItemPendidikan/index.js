import React from 'react';
import { imageApiAvatarUser } from '../../../utils/helpers/assetHelpers';

export default function Index(props) {
  return (
    <div className="relative flex gap-4 mt-4 bg-white p-4 rounded-md">
      <div className="relative">
        <img
          src={props?.item?.image ?? imageApiAvatarUser('SMA')}
          alt={props.item.image}
          className="h-14"
        />
      </div>

      <div className="relative">
        <h3 className="text-lg font-medium tracking-wide leading-relaxed text-zinc-800">
          {props.item.name}
        </h3>
        <p className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
          {props.item.year}

          {props.item.gpa && (
            <span className="ml-2 text-gray-500">GPA: {props.item.gpa}</span>
          )}
        </p>
        <p className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
          {props.item.major}
        </p>
        <p className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
          {props.item.title}
        </p>
      </div>
    </div>
  );
}
