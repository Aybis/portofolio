import React, { useEffect, useState } from 'react';
import { getImageFromAssets } from '../../../utils/helpers/assetHelpers';
import { Heading1, ItemKeahlian, TabNavigation } from '../../atoms';

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
    <div
      className="relative bg-white mt-12 p-8 pb-20"
      style={{
        minHeight: '65vh',
      }}>
      <div className="relative flex justify-center items-center">
        <Heading1 heading={'KEAHLIAN'} />
      </div>

      <TabNavigation
        handlerClick={handlerClickFilterSkills}
        isActive={selected}
        listMenu={menuHorizontal}
      />

      <div className="relative mt-10 grid grid-cols-3 md:grid-cols-4 -mx-3  gap-x-4 gap-y-4 md:mx-auto container max-w-7xl transition-all duration-300">
        {dataSkillFilter.map((item, index) => (
          <ItemKeahlian item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
