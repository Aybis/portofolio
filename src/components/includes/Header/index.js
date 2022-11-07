import {
  AcademicCapIcon as AcademicCapIconActive,
  AdjustmentsHorizontalIcon as AdjustmentsHorizontalIconActive,
  DocumentCheckIcon as DocumentCheckIconActive,
  DocumentIcon as DocumentIconActive,
  IdentificationIcon as IdentificationIconActive,
} from '@heroicons/react/24/solid';
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  DocumentCheckIcon,
  DocumentIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function Index() {
  const menu = [
    {
      name: 'Profile',
      url: '#profile',
      icon: IdentificationIcon,
      iconActive: IdentificationIconActive,
    },
    {
      name: 'Keahlian',
      url: '#keahlian',
      icon: AdjustmentsHorizontalIcon,
      iconActive: AdjustmentsHorizontalIconActive,
    },

    {
      name: 'Pengalaman',
      url: '#pengalaman',
      icon: AcademicCapIcon,
      iconActive: AcademicCapIconActive,
    },
    {
      name: 'Sertifikasi',
      url: '#sertifikasi',
      icon: DocumentCheckIcon,
      iconActive: DocumentCheckIconActive,
    },
    {
      name: 'Portofolio',
      url: '#portofolio',
      icon: DocumentIcon,
      iconActive: DocumentIconActive,
    },
  ];
  const [menuActive, setmenuActive] = useState('profile');

  // on scroll section active menu
  const onScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.getElementsByClassName('section');
    const sectionsArr = [...sections];

    sectionsArr.forEach((section) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setmenuActive(section.getAttribute('id'));
      }
    });
  };

  window.addEventListener('scroll', onScroll);

  // a href click go to section scroll smooth
  const handleScroll = (e, item) => {
    e.preventDefault();
    // set url with href value
    window.history.pushState(null, null, item.url);
    setmenuActive(item.name.toLowerCase());
    const element = document.querySelector(item.url);
    // element offset top hight header
    const offsetTop = element.offsetTop + 10;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed bottom-0 md:bottom-auto z-30 md:top-0 p-4 md:px-4 md:py-6 inset-x-0 bg-white md:bg-white/30 w-full backdrop-blur-md shadow-lg shadow-gray-200/40 border-t md:border-b border-gray-200">
      <div className="relative mx-auto container max-w-7xl flex md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 hidden md:block">
          AMA
        </h1>
        <ul className="relative grid grid-cols-5 gap-4 place-items-center content-center w-full md:w-fit md:mx-0">
          {menu.map((item, index) => (
            <li key={index} className="inline-block w-full text-center">
              <a
                onClick={(e) => handleScroll(e, item)}
                href={item.name}
                className={[
                  'text-gray-800 flex justify-center items-center hover:text-gray-900 text-center border-transparent border-b-2 text-sm md:hover:border-gray-600 transition-all duration-300 md:text-base leading-relaxed p-2',
                  menuActive === item.name.toLowerCase()
                    ? 'md:border-gray-600 font-semibold bg-zinc-100 md:bg-transparent rounded-md md:rounded-none'
                    : 'font-light',
                ].join(' ')}>
                {menuActive === item.name.toLowerCase() ? (
                  <item.iconActive className="h-5 md:hidden" />
                ) : (
                  <item.icon className="h-5 md:hidden text-zinc-400" />
                )}
                <p className="hidden md:block">{item.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
