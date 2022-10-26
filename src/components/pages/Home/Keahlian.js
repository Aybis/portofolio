import React, { useEffect, useState } from 'react';
import { getImageFromAssets } from '../../../utils/helpers/assetHelpers';

export default function Keahlian() {
  const [selected, setselected] = useState(1);
  const [dataSkillFilter, setdataSkillFilter] = useState([]);

  const skills = [
    {
      name: 'HTML',
      type: 'BOTH',
      image: getImageFromAssets('/assets/svg/language/html5.svg'),
    },
    {
      name: 'CSS',
      type: 'BOTH',
      image: getImageFromAssets('/assets/svg/language/css.svg'),
    },
    {
      name: 'JavaScript',
      type: 'BOTH',
      image: getImageFromAssets('/assets/svg/language/js.svg'),
    },
    {
      name: 'Tailwind CSS',
      type: 'BOTH',
      image: getImageFromAssets('/assets/svg/language/tailwind.svg'),
    },
    {
      name: 'Bootstrap',
      type: 'BOTH',
      image: getImageFromAssets('/assets/svg/language/bootstrap.svg'),
    },
    {
      name: 'jQuery',
      type: 'BE',
      image: getImageFromAssets('/assets/svg/language/jquery.svg'),
    },
    {
      name: 'React',
      type: 'FE',
      image: getImageFromAssets('/assets/svg/language/react.svg'),
    },
    {
      name: 'Next.js',
      type: 'FE',
      image: getImageFromAssets('/assets/svg/language/next.svg'),
    },
    {
      name: 'PHP',
      type: 'BE',
      image: getImageFromAssets('/assets/svg/language/php.svg'),
    },
    {
      name: 'Laravel',
      type: 'BE',
      image: getImageFromAssets('/assets/svg/language/laravel.svg'),
    },
    {
      name: 'Node JS',
      type: 'BE',
      image: getImageFromAssets('/assets/svg/language/nodejs.svg'),
    },
    {
      name: 'MySQL',
      type: 'Database',
      image: getImageFromAssets('/assets/svg/language/mysql.svg'),
    },
    {
      name: 'Firebase',
      type: 'Database',
      image: getImageFromAssets('/assets/svg/language/firebase.svg'),
    },
    {
      name: 'git',
      type: 'ALL',
      image: getImageFromAssets('/assets/svg/language/git.svg'),
    },
    {
      name: 'Figma',
      type: 'ALL',
      image: getImageFromAssets('/assets/svg/language/figma.svg'),
    },
  ];

  const menuHorizontal = [
    {
      name: 'Semua',
      id: 1,
    },
    {
      name: 'Frontend',
      id: 2,
    },
    {
      name: 'Backend',
      id: 3,
    },
    {
      name: 'Database',
      id: 4,
    },
  ];

  const handlerClickFilterSkills = (item) => {
    setselected(item.id);
    if (item.id === 1) {
      setdataSkillFilter(skills);
    } else if (item.id === 2) {
      setdataSkillFilter(
        skills.filter((skill) => skill.type === 'FE' || skill.type === 'BOTH'),
      );
    } else if (item.id === 3) {
      setdataSkillFilter(
        skills.filter((skill) => skill.type === 'BE' || skill.type === 'BOTH'),
      );
    } else {
      setdataSkillFilter(skills.filter((skill) => skill.type === 'Database'));
    }
  };

  useEffect(() => {
    setdataSkillFilter(skills);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative bg-white mt-12 p-8 pb-20">
      <div className="relative flex justify-center items-center">
        <h1 className="text-4xl font-bold leading-relaxed text-zinc-900 uppercase tracking-wide">
          Keahlian
        </h1>
      </div>

      <div className="relative flex justify-center items-center mt-12 mx-auto container max-w-7xl">
        <ul className="relative flex gap-2 bg-zinc-100 shadow-inner p-1.5 rounded-md">
          {menuHorizontal.map((item) => (
            <li
              key={item.id}
              onClick={() => handlerClickFilterSkills(item)}
              className={[
                'relative px-4 py-1 text-base cursor-pointer hover:bg-zinc-50 hover:text-zinc-800 rounded-md flex justify-center items-center transition-all duration-300 tracking-wide leading-relaxed',
                selected === item.id
                  ? 'bg-white shadow-lg shadow-zinc-200 text-zinc-800 font-medium'
                  : 'bg-transparent text-zinc-500 font-light ',
              ].join(' ')}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-10 grid grid-cols-4 gap-x-4 gap-y-4 mx-auto container max-w-7xl">
        {dataSkillFilter.map((item, index) => (
          <div
            key={item.name}
            className="relative border border-gray-200 rounded-lg p-2 flex justify-center items-center flex-col gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
