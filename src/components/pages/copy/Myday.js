import React, { useState } from 'react';
import Slider from 'react-slick';
import { getImageFromAssets } from '../../../utils/helpers/assetHelpers';
import { Layout } from '../../includes';
import { ContentLeft, ContentRight } from '../../molecules';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Myday() {
  const [isGrab, setisGrab] = useState(false);
  const listImages = [
    {
      id: 1,
      image: '/assets/myday/login.png',
      title: 'Login Page',
    },
    {
      id: 2,
      image: '/assets/myday/myday5.jpg',
      title: 'Homepage',
    },
    {
      id: 3,
      image: '/assets/myday/myday3.jpg',
      title: 'Checkin ',
    },
    {
      id: 4,
      image: '/assets/myday/myday7.jpg',
      title: 'Report Attendance',
    },
    {
      id: 5,
      image: '/assets/myday/myday6.jpg',
      title: 'Teammate',
    },
    {
      id: 6,
      image: '/assets/myday/myday4.jpg',
      title: 'Dashboard Employee',
    },
    {
      id: 7,
      image: '/assets/myday/myday2.jpg',
      title: 'Inforekan',
    },
    {
      id: 8,
      image: '/assets/myday/myday1.jpg',
      title: 'DayOff',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <ContentRight
        addClass={
          'bg-gradient-to-b from-gonea via-goneb to-gonec text-white flex justify-center items-center '
        }>
        <div className="container relative box-border ">
          <div className="text-center text-2xl font-semibold text-gray-900 hidden">
            <h1 className=" sm:hidden">mobile</h1>
            <h1 className="hidden sm:block md:hidden">SM</h1>
            <h1 className="hidden md:block lg:hidden">MD</h1>
            <h1 className="hidden lg:block xl:hidden">LG</h1>
            <h1 className="hidden xl:block 2xl:hidden">XL</h1>
            <h1 className="hidden 2xl:block">2XL</h1>
          </div>
          <div className="relative z-20 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-40 transition-all duration-300R">
            {/* Container Image */}
            <Slider {...settings} className="w-full gap-4">
              {listImages.map((item, index) => (
                <div className="relative px-4" key={index}>
                  <div
                    className={[
                      'relative flex flex-col justify-center items-center bg-white/50 py-6 px-3 mix-blend-overlay backdrop-blur-md rounded-3xl',
                      isGrab ? 'cursor-grabbing' : 'cursor-grab',
                    ].join(' ')}
                    onMouseDown={() => setisGrab(true)}
                    onMouseEnter={() => setisGrab(false)}
                    onMouseUp={() => setisGrab(false)}
                    key={index}>
                    <img
                      src={getImageFromAssets(item.image)}
                      className="h-[50rem] object-cover object-center rounded-xl"
                      alt=""
                    />
                  </div>
                  <p className="text-zinc-800 font-semibold uppercase mt-3 mb-6 text-center text-lg leading-relaxed">
                    {item.title}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </ContentRight>

      <ContentLeft>
        <div className="relative xl:ml-32 mr-12">
          <h1 className="text-6xl font-bold text-white leading-relaxed tracking-wide">
            MYDAY
            <small className="text-lg font-light">
              (Workfoce Management System)
            </small>
          </h1>
          <p className="text-lg font-light tracking-wide leading-relaxed text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste
            sunt, harum soluta dignissimos quos maiores dolorem illum similique
            unde nostrum quibusdam quia voluptatum alias tenetur cumque nam
            libero odit.
          </p>
        </div>
      </ContentLeft>
    </Layout>
  );
}
