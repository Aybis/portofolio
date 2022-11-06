import React from 'react';
import {
  Heading3,
  HeadingCustom,
  ItemPekerjaan,
  ItemPendidikan,
} from '../../atoms';

export default function CV() {
  const pendidikan = [
    {
      name: 'Universitas Bina Nusantara',
      gpa: 3.48,
      major: 'Computer Science',
      year: '2020 - 2022',
      title: 'Bachelor of Science',
      image:
        'https://media-exp1.licdn.com/dms/image/C560BAQEFIZ8GzdwqwQ/company-logo_100_100/0/1589011860582?e=1675900800&v=beta&t=vUsVHWMDQY-0XZTHqmb3kPi8_QZH0Y8q1-XPGDWACzs',
    },
    {
      name: 'Institut Pertanian Bogor',
      gpa: 3.14,
      major: 'Teknik Komputer',
      year: '2014 - 2017',
      title: 'Ahli Madya',
      image:
        'https://media-exp1.licdn.com/dms/image/C560BAQHPJsZeqG6gLA/company-logo_100_100/0/1634066915384?e=1675900800&v=beta&t=hwV0Q1_FD29MsphhjFNVuBG2yPAwLTlGjOeKzrSx0yM',
    },
    {
      name: 'SMA Negeri 5 Karawang',
      gpa: null,
      major: 'IPA',
      year: '2011 - 2014',
      title: '',
      image:
        'data:image/png;base64,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',
    },
  ];

  const pengalaman = [
    {
      name: 'PT. PINS Indonesia',
      position: [
        {
          name: 'Frontend Developer',
          year: '2021 - present',
          responsibility: [
            'Membuat website dengan menggunakan ReactJS',
            'Membuat website dengan menggunakan NextJS',
            'Membuat website dengan menggunakan GatsbyJS',
            'Membuat website dengan menggunakan VueJS',
          ],
          project: [
            'MyDay',
            'SIDARLING',
            'SQUAD IOTA',
            'SQUAD',
            'ENMANT',
            'FUNNEL',
          ],
        },
      ],
    },
    {
      name: 'PT. PINS Indonesia',
      position: [
        {
          name: 'Fullstack Developer',
          year: '2018 - 2021',
          responsibility: [
            'Membuat website dengan menggunakan ReactJS',
            'Membuat website dengan menggunakan NextJS',
            'Membuat website dengan menggunakan GatsbyJS',
            'Membuat website dengan menggunakan VueJS',
          ],
          project: [
            'MyDay',
            'SIDARLING',
            'SQUAD IOTA',
            'SQUAD',
            'ENMANT',
            'FUNNEL',
          ],
        },
      ],
    },
    {
      name: 'PT. GS Astra',
      position: [
        {
          name: 'Fullstack Developer',
          year: '2017 ',
          responsibility: [
            'Membuat website dengan menggunakan ReactJS',
            'Membuat website dengan menggunakan NextJS',
            'Membuat website dengan menggunakan GatsbyJS',
            'Membuat website dengan menggunakan VueJS',
          ],
          project: [
            'MyDay',
            'SIDARLING',
            'SQUAD IOTA',
            'SQUAD',
            'ENMANT',
            'FUNNEL',
          ],
        },
      ],
    },
  ];

  return (
    <div className="relative py-16 bg-zinc-50">
      <div className="relative mx-auto container max-w-7xl">
        {/* Header */}
        <div className="relative flex justify-center items-center">
          <HeadingCustom
            heading={'Curriculum Vitae (CV)'}
            addClass="text-center uppercase text-3xl md:text-4xl font-bold"
          />
        </div>

        {/* Content */}

        <div className="relative grid grid-cols-1 gap-5 md:gap-8 mt-12">
          <div className="relative col-span-1 h-fit px-4 md:px-0">
            <Heading3 heading={'Pendidikan'} />

            <div className="relative md:grid grid-cols-3 gap-4 mt-2">
              {pendidikan.map((item, index) => (
                <ItemPendidikan item={item} key={index} />
              ))}
            </div>
          </div>

          <div className="relative col-span-1 px-4 md:px-0">
            <Heading3 heading={'Pekerjaan'} />

            <div className="relative md:grid grid-cols-3 gap-4 mt-2">
              {pengalaman.map((item, index) => (
                <ItemPekerjaan item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
