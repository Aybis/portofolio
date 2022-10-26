import React from 'react';

export default function CV() {
  const pendidikan = [
    {
      name: 'Universitas Bina Nusantara',
      gpa: 3.48,
      major: 'Computer Science',
      year: '2020 - 2022',
      title: 'Bachelor of Science',
    },
    {
      name: 'Institut Pertanian Bogor',
      gpa: 3.14,
      major: 'Teknik Komputer',
      year: '2014 - 2017',
      title: 'Ahli Madya',
    },
    {
      name: 'SMA Negeri 5 Karawang',
      gpa: null,
      major: 'IPA',
      year: '2011 - 2014',
      title: '',
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

        {
          name: 'Fullstack Developer',
          year: '2018 - 2021',
          responsibility: [
            'Membuat website dengan menggunakan ReactJS',
            'Membuat website dengan menggunakan NextJS',
            'Membuat website dengan menggunakan GatsbyJS',
            'Membuat website dengan menggunakan VueJS',
            'Membuat website dengan menggunakan PHP',
          ],
          project: ['Superslim', 'LPL', 'Dashboard Operation', 'AR'],
        },
      ],
    },
  ];

  return (
    <div className="relative py-16 bg-white">
      <div className="relative mx-auto container max-w-7xl">
        {/* Header */}
        <div className="relative flex justify-center items-center">
          <h1 className="text-4xl font-bold leading-relaxed text-zinc-900 uppercase tracking-wide">
            Curriculum Vitae (CV)
          </h1>
        </div>

        {/* Content */}

        <div className="relative grid grid-cols-2 gap-4 mt-12">
          <div className="relative col-span-1  h-fit">
            <h2 className="text-xl font-medium tracking-wide leading-relaxed text-zinc-800">
              Pendidikan
            </h2>

            <div className="relative mt-2 p-4 border border-gray-200 rounded-lg">
              {pendidikan.map((item, index) => (
                <div key={index} className="relative mt-4">
                  <h3 className="text-lg font-medium tracking-wide leading-relaxed text-zinc-800">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
                    {item.year}

                    {item.gpa && (
                      <span className="ml-2 text-gray-500">
                        GPA: {item.gpa}
                      </span>
                    )}
                  </p>
                  <p className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
                    {item.major}
                  </p>
                  <p className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative col-span-1 ">
            <h2 className="text-xl font-medium tracking-wide leading-relaxed text-zinc-800">
              Pengalaman
            </h2>

            <div className="relative mt-2 p-4 border border-gray-200 rounded-lg">
              {pengalaman.map((item, index) => (
                <div key={index} className="relative mt-4">
                  <h3 className="text-lg font-medium tracking-wide leading-relaxed text-zinc-800">
                    {item.name}
                  </h3>
                  {item.position.map((position, index) => (
                    <div key={index} className="relative mt-4">
                      <h4 className="text-lg font-medium tracking-wide leading-relaxed text-zinc-800">
                        {position.name}
                      </h4>
                      <p className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800 mb-4">
                        {position.year}
                      </p>
                      <p>Tanggung Jawab : </p>

                      <ul className="list-disc list-inside ml-4 mb-3">
                        {position.responsibility.map(
                          (responsibility, index) => (
                            <li
                              key={index}
                              className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
                              {responsibility}
                            </li>
                          ),
                        )}
                      </ul>
                      <p>Project : </p>
                      <ul className="list-disc list-inside ml-4">
                        {position.project.map((project, index) => (
                          <li
                            key={index}
                            className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
