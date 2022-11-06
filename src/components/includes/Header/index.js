import React, { useState } from 'react';

export default function Index() {
  const menu = ['Profile', 'Keahlian', 'CV', 'Sertifikasi', 'Portofolio'];
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

    console.log(sectionsArr);
  };

  window.addEventListener('scroll', onScroll);

  // a href click go to section scroll smooth
  const handleScroll = (e) => {
    e.preventDefault();
    // set url with href value
    window.history.pushState(null, null, e.target.href);
    setmenuActive(e.target.href.split('#')[1]);
    const target = e.target.getAttribute('href');
    const element = document.querySelector(target);
    // element offset top hight header
    const offsetTop = element.offsetTop - 14;
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
            <li
              key={index}
              className="inline-block mr-4 px-2 w-full text-center">
              <a
                onClick={handleScroll}
                href={`#${item.toLowerCase()}`}
                className={[
                  'text-gray-800 hover:text-gray-900 text-center border-transparent border-b-2 text-sm hover:border-gray-600 transition-all duration-300 md:text-base leading-relaxed',
                  menuActive === item.toLowerCase()
                    ? 'border-gray-600 font-semibold'
                    : 'font-light',
                ].join(' ')}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
