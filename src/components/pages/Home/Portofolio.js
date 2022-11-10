import React, { useState } from 'react';
import { HeadingCustom, ItemPortoflio, TabNavigationTwo } from '../../atoms';

export default function Portofolio() {
  const [menuActive, setmenuActive] = useState('Semua');
  const dataMenuHorizontal = ['Semua', 'Frontend', 'Fullstack', 'Figma'];

  const dataPortofolio = [
    {
      name: 'MyDay',
      type: 'Frontend',
      desc: 'Workfoce Management System, Aplikasi Kepegawaian dari Absensi, Cuti, Lembur, Activity, Info Karyawan, Reminder Ulang Tahun Karyawan, Reminder Absensi, Laporan Bulanan',
      link: 'https://myday.pins.co.id/',
      tech: [
        'React JS',
        'Redux',
        'Heroicons',
        'React Router',
        'CSS',
        'Javasript',
        'Tailwind',
      ],
      image: '',
    },
    {
      name: 'E-PROGAL',
      type: 'Frontend',
      desc: 'Aplikasi Digitalisasi Procurement dan Legal, namun aplikasi masih dalam tahap pengembangan sehingga tampilan belum responsive, hanya untuk tampilan desktop',
      link: 'https://e-progal.vercel.app/',
      tech: [
        'React JS',
        'Redux',
        'Heroicons',
        'React Router',
        'CSS',
        'Javasript',
        'Tailwind',
      ],
      image: '',
    },
    {
      name: 'SIDARLING',
      type: 'Frontend',
      link: 'https://unbill.vercel.app/',
      desc: 'Sistem Informasi Data AR Unbilled to Billing',
      tech: [
        'React JS',
        'Redux',
        'Heroicons',
        'React Router',
        'CSS',
        'Javasript',
        'Tailwind',
      ],
      image: '',
    },
    {
      name: 'SQUAD IOTA',
      type: 'Frontend',
      link: 'https://iota-zeta.vercel.app/',
      desc: 'Aplikasi monitoring absensi dan aktivitas pekerjaan untuk tim Squad IOTA',
      tech: [
        'React JS',
        'Redux',
        'Heroicons',
        'React Router v6',
        'Javasript',
        'Tailwind',
      ],
      image: '',
    },
    {
      name: 'SQUAD PINS',
      type: 'Frontend',
      link: 'https://repair-kalibrasi.vercel.app/',
      desc: 'Aplikasi monitoring absensi dan aktivitas pekerjaan untuk tim Repair Kalibrasi',
      tech: [
        'React JS',
        'Redux',
        'Heroicons',
        'React Router v6',
        'Javasript',
        'Tailwind',
      ],
      image: '',
    },
    {
      name: 'ENMANT',
      type: 'Frontend',
      link: 'https://enmant.vercel.app/',
      desc: 'Aplikasi Management dan Monitoring Listring untuk PT. Telkom Indonesia',
      tech: [
        'React JS',
        'Redux',
        'Heroicons',
        'React Router v6',
        'Javasript',
        'Tailwind',
      ],
      image: '',
    },
    {
      name: 'MBR',
      type: 'Frontend',
      desc: 'Aplikasi Booking Meeting Room',
      link: 'https://reservasi.vercel.app',
      tech: ['Next JS', 'Heroicons', 'CSS', 'Typescript', 'Tailwind'],
      image: '',
    },
    {
      name: 'POWER HUMANITY',
      type: 'Frontend',
      link: 'https://gerbang-sedekah.vercel.app/',
      desc: 'Aplikasi crowfunding berbasis syariah',
      tech: [
        'React JS',
        'Redux',
        'Heroicons',
        'React Router v6',
        'CSS',
        'Javasript',
        'Tailwind',
      ],
      image: '',
    },
    {
      name: 'BIG MUS',
      type: 'Frontend',
      link: '',
      desc: 'Landing page untuk aplikasi Big Mus, penjualan jenis mencit dan rat',
      tech: ['HTML5', 'CSS', 'Javasript'],
      image: '',
    },
    {
      name: 'VMAT',
      type: 'Frontend',
      link: 'https://skripsi-app.vercel.app/',
      desc: 'VPN Management Automation Tool, Aplikasi management VPN dari pembuatan user, pembuatan server, pembuatan group, pembuatan access list, pembuatan routing, pembuatan firewall, pembuatan NAT, pembuatan policy, pembuatan monitoring, pembuatan report',
      tech: [
        'Javasript',
        'Tailwind',
        'MongoDB',
        'Express',
        'React JS',
        'Node JS',
        'Redux',
        'Heroicons',
        'React Router v6',
      ],
      image: '',
    },
    {
      name: 'Dashboard Funnel',
      type: 'Frontend',
      desc: 'Aplikasi Reporting Management',
      link: 'https://funnel-delta.vercel.app/',
      tech: [
        'Javasript',
        'CSS',
        'Tailwind',
        'React JS',
        'Redux',
        'Heroicons',
        'React Router v6',
      ],
      image: '',
    },
    {
      name: 'LPL',
      type: 'Fullstack',
      link: '',
      desc: 'Aplikasi Management dan Monitoring Report Performansi',
      tech: ['PHP', 'Laravel', 'MySQL', 'Javasript', 'Boostrap'],
      image: '',
    },
    {
      name: 'AR',
      type: 'Fullstack',
      link: '',
      desc: 'Aplikasi Management dan Monitoring Account Receivable Billing',
      tech: ['PHP', 'Laravel', 'MySQL', 'Javasript', 'Boostrap'],
      image: '',
    },
    {
      name: 'Superslim',
      type: 'Fullstack',
      link: '',
      desc: 'Aplikasi Management dan Monitoring Dokumen SPPH, BAKN, SPK, SP3, dan PKS',
      tech: ['PHP', 'Laravel', 'MySQL', 'Javasript', 'Boostrap', 'jQuery'],
      image: '',
    },
    {
      name: 'Dashboard Operation',
      type: 'Fullstack',
      link: '',
      desc: 'Aplikasi Monitoring Laporan Bulanan Unit Operation',
      tech: ['PHP', 'Laravel', 'MySQL', 'Javasript', 'Boostrap', 'jQuery'],
      image: '',
    },
    {
      name: 'MyWedding',
      type: 'Frontend',
      link: 'https://frisca-muchtar.vercel.app/',
      desc: 'Aplikasi Undangan Digital Pernikahan',
      tech: ['Javasript', 'CSS', 'Tailwind', 'React JS', 'Heroicons'],
      image: '',
    },
    {
      name: 'MyDay',
      type: 'Figma',
      link: 'https://www.figma.com/file/mxvuSqckZISSzOTJMJQ2zf/UI%2FUX?node-id=1%3A4',
      desc: 'Mockup aplikasi MyDay',
      tech: ['Figma'],
      image: '',
    },
    {
      name: 'LMS',
      type: 'Figma',
      link: 'https://www.figma.com/file/mKCKFUZLy9dbfYIR4avioC/LMS?node-id=15%3A900',
      desc: 'Mockup Aplikasi Learning Management System',
      tech: ['Figma'],
      image: '',
    },
    {
      name: 'C-19',
      type: 'Figma',
      link: 'https://www.figma.com/file/OnKop8JN9iZYZiLP8d3Msl/The-C-19?node-id=0%3A1',
      desc: 'Mockup Aplikasi Telemedicine C-19',
      tech: ['Figma'],
      image: '',
    },
    {
      name: 'BigMUS',
      type: 'Figma',
      link: 'https://www.figma.com/file/15TQW1HgXxLVvf0Zwx6sYH/BIGMUS?node-id=0%3A1',
      desc: 'Mockup Aplikasi Landing Page Penjualan Mencit dan Rat',
      tech: ['Figma'],
      image: '',
    },
    {
      name: 'WFM',
      type: 'Figma',
      link: 'https://www.figma.com/file/6aGjBwnekDWIKzP4hSuJnj/Presensi-Mobile?node-id=0%3A1',
      desc: 'Mockup Aplikasi Absensi',
      tech: ['Figma'],
      image: '',
    },
  ];

  return (
    <div
      id="portofolio"
      className="section relative py-16 bg-gray-50 transition-all duration-300"
      style={{
        minHeight: '70vh',
      }}>
      <div className="relative mx-auto container max-w-7xl">
        {/* Header */}
        <div className="relative flex justify-center items-center">
          <HeadingCustom
            heading={'Portofolio'}
            addClass="text-center uppercase text-3xl md:text-4xl font-bold"
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

        <div className="relative mt-4 mb-2 px-4">
          <p>
            Total :{' '}
            {
              dataPortofolio?.filter(
                (data) => menuActive === 'Semua' || data.type === menuActive,
              ).length
            }{' '}
            Project
          </p>
        </div>

        {/* Data Portofolio */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 p-4">
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
