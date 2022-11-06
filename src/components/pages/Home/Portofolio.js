import React, { useState } from 'react';
import { HeadingCustom, ItemPortoflio, TabNavigationTwo } from '../../atoms';

export default function Portofolio() {
  const [menuActive, setmenuActive] = useState('Semua');
  const dataMenuHorizontal = ['Semua', 'Frontend', 'Fullstack', 'Figma'];

  const dataPortofolio = [
    {
      name: 'MyDay (Workfoce Management System)',
      type: 'Frontend',
      link: '',
      tech: ['React JS', 'CSS', 'Javasript', 'Tailwind'],
      image: '',
    },
    {
      name: 'SIDARLING (Sistem Informasi Data AR Unbilled to Billing)',
      type: 'Frontend',
      link: '',
      tech: ['React JS', 'CSS', 'Javasript', 'Tailwind'],
      image: '',
    },
    {
      name: 'SQUAD IOTA (Aplikasi monitoring absensi dan aktivitas pekerjaan)',
      type: 'Frontend',
      link: '',
      tech: ['React JS', 'Javasript', 'Tailwind'],
      image: '',
    },
    {
      name: 'SQUAD (Aplikasi monitoring absensi dan aktivitas pekerjaan)',
      type: 'Frontend',
      link: '',
      tech: ['React JS', 'Javasript', 'Tailwind'],
      image: '',
    },
    {
      name: 'POWER HUMANITY',
      type: 'Frontend',
      link: '',
      tech: ['React JS', 'CSS', 'Javasript', 'Tailwind'],
      image: '',
    },
    {
      name: 'BIG MUS',
      type: 'Frontend',
      link: '',
      tech: ['HTML5', 'CSS', 'Javasript'],
      image: '',
    },
    {
      name: 'VMAT (VPN Management Automation)',
      type: 'Frontend',
      tech: [
        'Javasript',
        'Tailwind',
        'MongoDB',
        'Express',
        'React JS',
        'Node JS',
      ],
      image: '',
    },
    {
      name: 'Dashboard Funnel',
      type: 'Frontend',
      tech: ['Javasript', 'CSS', 'Tailwind', 'React JS'],
      image: '',
    },
    {
      name: 'LPL',
      type: 'Fullstack',
      tech: ['PHP', 'Laravel', 'MySQL', 'Javasript', 'Boostrap'],
      image: '',
    },
    {
      name: 'Superslim',
      type: 'Fullstack',
      tech: ['PHP', 'Laravel', 'MySQL', 'Javasript', 'Boostrap', 'jQuery'],
      image: '',
    },
    {
      name: 'MyWedding',
      type: 'Frontend',
      tech: ['Javasript', 'CSS', 'Tailwind', 'React JS'],
      image: '',
    },
    {
      name: 'WFM (Workforce Management System)',
      type: 'Figma',
      tech: ['Figma'],
      image: '',
    },
    {
      name: 'LMS (Learning Management System)',
      type: 'Figma',
      tech: ['Figma'],
      image: '',
    },
  ];

  return (
    <div
      className="relative py-16 bg-gray-50 transition-all duration-300"
      style={{
        minHeight: '70vh',
      }}>
      <div className="relative mx-auto container max-w-7xl">
        {/* Header */}
        <div className="relative flex justify-center items-center">
          <HeadingCustom
            heading={'Portofolio'}
            addClass={
              'text-center uppercase text-2xl font-semibold md:text-4xl'
            }
          />
        </div>

        {/* Menu Horizontal */}
        <div className="relative mt-8 flex justify-center items-center">
          <TabNavigationTwo
            handlerClick={setmenuActive}
            listMenu={dataMenuHorizontal}
            menuActive={menuActive}
          />
        </div>

        {/* Data Portofolio */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-8">
          {dataPortofolio
            .filter(
              (data) => menuActive === 'Semua' || data.type === menuActive,
            )
            .map((item, index) => (
              <ItemPortoflio item={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
