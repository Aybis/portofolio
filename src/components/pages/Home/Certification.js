import React, { useEffect, useState } from 'react';
import { getImageFromAssets } from '../../../utils/helpers/assetHelpers';
import { ItemSertifikasi } from '../../atoms';

export default function Certification() {
  const [menuActive, setmenuActive] = useState('Semua');
  const [showModal, setshowModal] = useState(false);
  const widthMobile = 600;
  const [dataSelected, setdataSelected] = useState({});
  const [dataFilter, setdataFilter] = useState([]);
  let institution = [
    'Semua',
    'Dicoding',
    window.innerWidth <= widthMobile ? 'BWA' : 'BuildWith Angga',
    window.innerWidth <= widthMobile ? 'HR' : 'HackerRank',
  ];

  const dataCertification = [
    {
      name: 'CSS Certificate',
      doc: 'https://www.hackerrank.com/certificates/af25b968dd02',
      institution: institution[3],
      date: 'Nov 2022',
      image: getImageFromAssets('/assets/sertifikasi/hackerrank/css.png'),
      expired: '-',
      uniqueKey: 'af25b968dd02',
    },
    {
      name: 'Javascript (Intermediate) Certificate',
      doc: 'https://www.hackerrank.com/certificates/iframe/aa7fcd78674f',
      image: getImageFromAssets('/assets/sertifikasi/hackerrank/jsinter.png'),
      institution: institution[3],
      date: 'Nov 2022',
      expired: '-',
      uniqueKey: 'aa7fcd78674f',
    },
    {
      name: 'Javascript (Basic) Certificate',
      doc: 'https://www.hackerrank.com/certificates/iframe/48b6222e600b',
      image: getImageFromAssets('/assets/sertifikasi/hackerrank/jsbasic.png'),

      institution: institution[3],
      date: 'Nov 2022',
      expired: '-',
      uniqueKey: '48b6222e600b',
    },
    {
      name: 'SQL (Basic) Certificate',
      doc: 'https://www.hackerrank.com/certificates/iframe/8b85533ea72a',
      image: getImageFromAssets('/assets/sertifikasi/hackerrank/sql.png'),
      institution: institution[3],
      date: 'Nov 2022',
      expired: '-',
      uniqueKey: '8b85533ea72a',
    },

    //   DICODING
    {
      name: 'Memulai Pemrograman dengan C',
      doc: 'https://www.dicoding.com/certificates/QLZ92131MX5D',
      image: getImageFromAssets('/assets/sertifikasi/dicoding/c.pdf'),
      institution: institution[1],
      date: 'Okt 2022',
      expired: '24-10-2025',
      uniqueKey: 'QLZ92131MX5D',
    },
    {
      name: 'Belajar Dasar Pemrograman JavaScript',
      doc: 'https://www.dicoding.com/certificates/72ZDO1GJLXYW',
      image: getImageFromAssets('/assets/sertifikasi/dicoding/dasar_js.pdf'),
      institution: institution[1],
      date: 'Okt 2022',
      expired: '24-10-2025',
      uniqueKey: '72ZDO1GJLXYW',
    },
    {
      name: 'Memulai Pemrograman Dengan Java',
      doc: 'https://www.dicoding.com/certificates/N9ZO4E930ZG5',
      image: getImageFromAssets('/assets/sertifikasi/dicoding/java.pdf'),
      institution: institution[1],
      date: 'Okt 2022',
      expired: '24-10-2025',
      uniqueKey: 'N9ZO4E930ZG5',
    },
    {
      name: 'Memulai Pemrograman dengan Python',
      doc: 'https://www.dicoding.com/certificates/07Z6G548MXQR',
      image: getImageFromAssets('/assets/sertifikasi/dicoding/python.pdf'),
      institution: institution[1],
      date: 'Okt 2022',
      expired: '24-10-2025',
      uniqueKey: '07Z6G548MXQR',
    },
    {
      name: 'Belajar Membuat Fron-End Web untuk Pemula',
      doc: 'https://www.dicoding.com/certificates/1RXYON8VMPVM',
      image: getImageFromAssets('/assets/sertifikasi/dicoding/frontend.pdf'),
      institution: institution[1],
      date: 'Okt 2022',
      expired: '15-10-2025',
      uniqueKey: '1RXYON8VMPVM',
    },
    {
      name: 'Belajar Dasar Pemrograman Web',
      doc: 'https://www.dicoding.com/certificates/2VX3YWYM3PYQ',
      image: getImageFromAssets('/assets/sertifikasi/dicoding/dasar_web.pdf'),
      institution: institution[1],
      date: 'Okt 2022',
      expired: '12-10-2025',
      uniqueKey: '2VX3YWYM3PYQ',
    },

    {
      name: 'Belajar Dasar Visualisasi Data',
      doc: 'https://www.dicoding.com/certificates/0LZ01WW8NP65',
      image: getImageFromAssets('/assets/sertifikasi/dicoding/data.pdf'),
      institution: institution[1],
      date: 'Okt 2022',
      expired: '11-10-2025',
      uniqueKey: '0LZ01WW8NP65',
    },
    // BWA
    {
      name: 'UX Design Gestalt',
      doc: 'https://buildwithangga.com/cek-sertifikat',
      image: getImageFromAssets('/assets/sertifikasi/bwa/ux.pdf'),
      institution: institution[2],
      date: 'Apr 2021',
      expired: '-',
      uniqueKey: 'hDLd0SJDYl',
    },
    {
      name: 'React Native Apps Developer',
      doc: 'https://buildwithangga.com/cek-sertifikat',
      image: getImageFromAssets('/assets/sertifikasi/bwa/react_native.pdf'),
      institution: institution[2],
      date: 'Mar 2021',
      expired: '-',
      uniqueKey: 'D6QMQYrSlx',
    },
    {
      name: 'Fullstack Laravel Fluter',
      doc: 'https://buildwithangga.com/cek-sertifikat',
      image: getImageFromAssets('/assets/sertifikasi/bwa/laravel_flutter.pdf'),
      institution: institution[2],
      date: 'Sep 2021',
      expired: '-',
      uniqueKey: 'Ym7qwe2ZGZ',
    },
    {
      name: 'Mastering React JS: Progressive Web Apps (E-Commerce)',
      doc: 'https://buildwithangga.com/cek-sertifikat',
      image: getImageFromAssets('/assets/sertifikasi/bwa/pwa.pdf'),
      institution: institution[2],
      date: 'Sep 2021',
      expired: '-',
      uniqueKey: 'Ym7qwe2ZGZ',
    },
    {
      name: 'Bootcamp Complete UI/UX Design: Netflix Streaming App With Figma',
      doc: 'https://buildwithangga.com/cek-sertifikat',
      image: getImageFromAssets('/assets/sertifikasi/bwa/bootcamp_ui_ux.pdf'),
      institution: institution[2],
      date: 'Okt 2021',
      expired: '-',
      uniqueKey: 'T1JyucT1fn',
    },
    {
      name: 'Website Development Microservice : Website Kelas Online',
      doc: 'https://buildwithangga.com/cek-sertifikat',
      image: getImageFromAssets('/assets/sertifikasi/bwa/microservices.pdf'),
      institution: institution[2],
      date: 'Sep 2021',
      expired: '-',
      uniqueKey: 'Ym7qwe2ZGZ',
    },
    {
      name: 'Master Class: React JS dan Tailwind CSS Website Development',
      doc: 'https://buildwithangga.com/cek-sertifikat',
      image: getImageFromAssets('/assets/sertifikasi/bwa/react_tailwind.pdf'),
      institution: institution[2],
      date: 'Sep 2021',
      expired: '-',
      uniqueKey: 'Ym7qwe2ZGZ',
    },
    {
      name: 'Pitch: Membuat Presentasi Untuk Ide Startup',
      doc: 'https://buildwithangga.com/cek-sertifikat',
      image: getImageFromAssets('/assets/sertifikasi/bwa/pitch.pdf'),
      institution: institution[2],
      date: 'Sep 2021',
      expired: '-',
      uniqueKey: 'Ym7qwe2ZGZ',
    },
  ];

  const handlerMenuClick = (menu) => {
    setmenuActive(menu);
  };

  const handlerClickShowDetail = (data) => {
    setshowModal(true);
    setdataSelected(data);
  };

  const filterDataCertification = (menu) => {
    if (menu === 'Semua') {
      setdataFilter(dataCertification);
    } else {
      setdataFilter(
        dataCertification.filter((item) => item.institution === menu),
      );
    }
  };

  useEffect(() => {
    filterDataCertification(menuActive);
  }, [menuActive]);

  return (
    <div
      id="sertifikasi"
      className={[
        'section relative px-4 py-16 bg-white max-h-full transition-all duration-300',
        showModal && 'overflow-hidden',
      ].join(' ')}
      style={{
        minHeight: '70vh',
      }}>
      <div
        className={[
          'relative mx-auto container max-w-7xl',
          showModal ? 'pointer-events-none' : 'pointer-events-auto',
        ].join(' ')}>
        {/* Header */}
        <div className="relative flex justify-center items-center">
          <h1 className="text-4xl font-bold leading-relaxed text-zinc-900 uppercase tracking-wide">
            Sertifikasi
          </h1>
        </div>

        {/* Content */}
        <div className="relative mt-8">
          <ul className="relative flex gap-4 justify-center items-center p-4 b">
            {institution.map((item, index) => (
              <li
                onClick={() => handlerMenuClick(item)}
                className={[
                  'relative box-border text-sm px-4 py-2 rounded-md border border-transparent flex justify-center transition-all duration-300 cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-lg shadow-gray-200',
                  menuActive === item
                    ? 'bg-gray-800 text-white shadow-lg border-none shadow-gray-200 font-medium leading-relaxed text-sm tracking-wide'
                    : 'border-gray-200 text-gray-400 font-light',
                ].join(' ')}
                key={index}>
                {item}
              </li>
            ))}
          </ul>

          <div className="relative mt-8 mb-4">
            <h4>Result : {dataFilter.length} Sertifikat</h4>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
            {dataFilter.map((item, index) => (
              <ItemSertifikasi
                handlerClick={handlerClickShowDetail}
                item={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        onClick={() => setshowModal(false)}
        className={[
          'fixed  backdrop-blur-sm mx-auto inset-0 overflow-hidden flex justify-center items-center transition-all duration-300',
          showModal ? 'animate-fadeIn' : 'animate-fadeOut',
          showModal
            ? 'w-full h-screen z-50 bg-white/30'
            : 'bg-white/100 z-0 h-1 w-0 top-1/2',
        ].join(' ')}>
        <div className="relative flex flex-col gap-4 justify-center items-center rounded-lg p-4 bg-white max-w-7xl">
          <div className="relative w-full h-full">
            {dataSelected?.image?.includes('.pdf') ? (
              <iframe
                src={dataSelected?.image}
                width={500}
                height={700}
                className="rounded-md border border-gray-200"
                title={dataSelected?.image}></iframe>
            ) : (
              <img
                src={dataSelected?.image}
                alt={dataSelected?.name}
                className="relative h-full md:max-h-96 w-full object-cover object-top rounded-md border border-gray-200"
              />
            )}
          </div>
          <button
            onClick={() => setshowModal(false)}
            className="relative w-full h-full text-lg font-medium flex justify-center items-center p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all duration-300 cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
