import React from 'react';
import { getImageFromAssets } from '../../../utils/helpers/assetHelpers';

export default function Index() {
  return (
    <div className="hidden md:block md:fixed h-screen max-w-md left-8 top-0 z-10">
      <div className="relative h-full flex flex-col justify-between items-start text-white py-8 px-2">
        <div>
          <h1 className="font-semibold text-lg text-white leading-relaxed tracking-wide">
            AMA
          </h1>
        </div>

        <div className="relative hidden md:block">
          <p className="text-sm font-normal uppercase text-white">
            Connect with me
          </p>

          <div className="relative flex gap-2 mt-2">
            {/* Whatsaap Icon */}
            <div className="relative h-10 w-10 p-1.5 rounded-md bg-zinc-600 cursor-pointer hover:bg-zinc-400 transition-all duration-300">
              <img
                src={getImageFromAssets('/assets/svg/whatsapp.svg')}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            {/* Gmail Icon */}
            <div className="relative h-10 w-10 p-1.5 rounded-md bg-zinc-600 cursor-pointer hover:bg-zinc-400 transition-all duration-300">
              <img
                src={getImageFromAssets('/assets/svg/gmail.svg')}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            {/* Dribble Icon */}
            <div className="relative h-10 w-10 p-1.5 rounded-md bg-zinc-600 cursor-pointer hover:bg-zinc-400 transition-all duration-300">
              <img
                src={getImageFromAssets('/assets/svg/dribble.svg')}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
