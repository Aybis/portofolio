import React, { useState } from 'react';

export default function Portofolio() {
  const [menuActive, setmenuActive] = useState('Semua');
  const dataMenuHorizontal = ['Semua', 'Frontend', 'Fullstack', 'Figma'];

  const dataPortofolio = [
    {
      name: 'MyDay (Workfoce Management System)',
      type: 'Frontend',
      tech: ['React JS', 'CSS', 'Javasript', 'Tailwind'],
    },
    {
      name: 'SIDARLING (Sistem Informasi Data AR Unbilled to Billing)',
      type: 'Frontend',
      tech: ['React JS', 'CSS', 'Javasript', 'Tailwind'],
    },
    {
      name: 'SQUAD IOTA (Aplikasi monitoring absensi dan aktivitas pekerjaan)',
      type: 'Frontend',
      tech: ['React JS', 'Javasript', 'Tailwind'],
    },
    {
      name: 'SQUAD (Aplikasi monitoring absensi dan aktivitas pekerjaan)',
      type: 'Frontend',
      tech: ['React JS', 'Javasript', 'Tailwind'],
    },
    {
      name: 'POWER HUMANITY',
      type: 'Frontend',
      tech: ['React JS', 'CSS', 'Javasript', 'Tailwind'],
    },
    {
      name: 'BIG MUS',
      type: 'Frontend',
      tech: ['HTML5', 'CSS', 'Javasript'],
    },
    {
      name: 'VMAT',
      type: 'Frontend',
      tech: [
        'Javasript',
        'Tailwind',
        'MongoDB',
        'Express',
        'React JS',
        'Node JS',
      ],
    },
    {
      name: 'Funnel',
      type: 'Frontend',
      tech: ['Javasript', 'CSS', 'Tailwind', 'React JS'],
    },
    {
      name: 'LPL',
      type: 'Fullstack',
      tech: ['PHP', 'Laravel', 'MySQL', 'Javasript', 'Boostrap'],
    },
    {
      name: 'Superslim',
      type: 'Fullstack',
      tech: ['PHP', 'Laravel', 'MySQL', 'Javasript', 'Boostrap', 'jQuery'],
    },
    {
      name: 'MyWedding',
      type: 'Frontend',
      tech: ['Javasript', 'CSS', 'Tailwind', 'React JS'],
    },
  ];

  return (
    <div className="relative py-16 bg-zinc-50">
      <div className="relative mx-auto container max-w-7xl">
        {/* Header */}
        <div className="relative flex justify-center items-center">
          <h1 className="text-4xl font-bold leading-relaxed text-zinc-900 uppercase tracking-wide">
            Portofolio
          </h1>
        </div>

        {/* Menu Horizontal */}
        <div className="relative mt-8 flex justify-center items-center">
          <ul className="relative flex gap-2">
            {dataMenuHorizontal.map((item, index) => (
              <li
                key={index}
                onClick={() => setmenuActive(item)}
                className={[
                  'relative px-4 py-1 text-base border-b-2 pb-2 cursor-pointer hover:bg-zinc-50 hover:text-zinc-800 hover:border-zinc-400 flex justify-center items-center transition-all duration-300 tracking-wide leading-relaxed',
                  menuActive === item
                    ? 'border-zinc-800 text-zinc-800 font-semibold'
                    : 'border-transparent text-zinc-500/70 font-light',
                ].join(' ')}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Data Portofolio */}
        <div className="relative grid grid-cols-3 gap-4 p-4 mt-8">
          {dataPortofolio
            .filter(
              (data) => menuActive === 'Semua' || data.type === menuActive,
            )
            .map((item, index) => (
              <div
                key={index}
                className="relative p-4 bg-white shadow-lg shadow-gray-200/50 rounded-lg flex flex-col justify-between flex-1 h-52">
                <div>
                  <h1 className="text-lg font-semibold leading-relaxed text-zinc-800">
                    {item.name}
                  </h1>
                  <p className="text-base font-light text-zinc-900 mt-1">
                    {item.type}
                  </p>
                </div>
                <ul className="relative flex box-border flex-wrap gap-3 ">
                  {item.tech.map((itemTech, indexTech) => (
                    <li
                      key={indexTech}
                      className="relative px-2.5 py-1.5 border border-gray-200 bg-zinc-50 text-sm rounded-lg text-zinc-900 font-light">
                      {itemTech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
