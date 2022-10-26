import React, { useState } from 'react';
import {
  ArrowLongDownIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid';
import { getImageFromAssets } from '../../../utils/helpers/assetHelpers';

export default function Profile() {
  const contact = [
    {
      name: 'Email',
      url: 'mailto:muchtara2m@gmail.com',
      icon: getImageFromAssets('/assets/svg/gmail.svg'),
    },
    {
      name: 'Linkedin',
      url: '',
      icon: getImageFromAssets('/assets/svg/dribble.svg'),
    },
    {
      name: 'Whatsaap',
      url: '',
      icon: getImageFromAssets('/assets/svg/whatsapp.svg'),
    },
    {
      name: 'Linkedin',
      url: '',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png',
    },
  ];

  const [showDownload, setshowDownload] = useState(false);
  return (
    <div className="relative w-full pt-12 p-4 mt-12">
      <div className="relative mx-auto max-w-7xl container p-4 flex justify-center items-center gap-14">
        <div className="relative flex justify-center items-center ">
          {/* Shape Background Profile */}
          <div className="relative h-[27.5rem] w-72 flex justify-center items-center">
            <div className="absolute h-[25rem] w-full mt-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 "></div>
            <img
              src={getImageFromAssets('../assets/images/me.png')}
              alt="profile"
              className="relative h-full w-full object-cover rounded-b-xl object-top "
            />
          </div>
        </div>
        {/* About Me */}
        <div className="relative flex flex-col justify-center gap-14">
          <div>
            <h4 className="text-2xl font-medium text-gray-700 leading-relaxed">
              Frontend Developer
            </h4>
            <h2 className="text-5xl font-bold text-gray-900">
              Abdul Muchtar Astria
            </h2>
          </div>

          {/* Description */}
          <div className="relative -mt-6">
            <p className="text-gray-700 leading-relaxed tracking-wide font-light w-[32rem]">
              Bekerja sebagai Frontend Developer di PT PINS Indonesia dengan
              pengalaman 4 tahun. Sarjana Ilmu Komputer di Universitas Bina
              Nusantara. Saya memiliki kemampuan untuk membuat situs web,
              aplikasi web, dan aplikasi seluler. Saya juga memiliki kemampuan
              untuk membuat desain UI/UX.
            </p>
          </div>

          {/* Contact */}
          <div className="relative grid grid-cols-4 gap-3 w-fit -mt-8">
            {contact.map((item, index) => (
              <div
                key={index}
                className="relative p-2 bg-zinc-200 cursor-pointer hover:shadow-lg shadow-gray-200/50 transition-all duration-300 hover:bg-zinc-50 rounded-md">
                <img src={item.icon} alt={index} className="h-6 w-full" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="relative flex w-fit items-end gap-4 -mt-6">
            {/* Button View More, btn click go to portfolio */}
            <button className="group relative mt-8 border border-zinc-800 bg-zinc-800 text-sm text-gray-50 px-4 py-2 rounded-md font-medium tracking-wide cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-colorone-500/50 flex justify-between items-center gap-4">
              View more
              <span>
                <ArrowLongRightIcon className="h-5 group-hover:ml-3 transition-all duration-300" />
              </span>
            </button>

            {/* Button Download Portofolio & CV */}
            <div className="relative flex">
              <div className="text-sm border font-medium text-zinc-800 bg-transparent border-zinc-800 border-r-0 rounded-l-md px-4 py-2">
                Download
              </div>
              <button
                onClick={() => setshowDownload(!showDownload)}
                className="p-2 bg-zinc-200/70 border leading-relaxed border-zinc-800 rounded-r-md group hover:shadow-lg shadow-gray-200 transition-all duration-300">
                <ArrowLongDownIcon className="h-4 text-zinc-800 group-hover:animate-bounce transition-all duration-300" />
              </button>
            </div>
            <div
              className={[
                'absolute right-0 top-[4.65rem] max-h-full grid box-content rounded-md transition-all duration-500',
                showDownload ? 'h-full opacity-100' : 'h-0 opacity-0',
              ].join(' ')}>
              {showDownload && (
                <React.Fragment>
                  <button className="relative px-4 py-2 bg-zinc-100 text-gray-700 hover:bg-zinc-700 hover:text-zinc-50 border border-gray-800 rounded-t-md transition-all duration-300">
                    Portofolio
                  </button>
                  <button className="relative px-4 py-2 bg-zinc-100 text-gray-700 hover:bg-zinc-700 hover:text-zinc-50 border border-gray-800 rounded-b-md transition-all duration-300">
                    CV (Curriculum Vitae)
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
