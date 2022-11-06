import React from 'react';

export default function Index(props) {
  const dataImage = [
    'https://media.licdn.com/dms/image/C560BAQHneWLNCPQgDA/company-logo_100_100/0/1641202397642?e=1675900800&v=beta&t=QTPjqfa3P6ulRZA-UHUBZmzCK4a5VFbem8O0v_VFcbo',
    'https://media.licdn.com/dms/image/C560BAQEzEQ03yA8k5g/company-logo_100_100/0/1625980729352?e=1675900800&v=beta&t=Xv13oOlhcYd9fOzC88UHqG9mWbPkDoX532DC9SyL-QE',
    'https://media.licdn.com/dms/image/C560BAQHOIi63tC8k8w/company-logo_100_100/0/1660182933061?e=1675900800&v=beta&t=m4inU8JlglB6JLp9pJqIAAHnJHtaSyL53pv64o5YbJg',
  ];

  return (
    <div className="relative bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg pb-12">
      <div className="absolute bottom-2 right-4 text-xs font-light text-gray-700">
        {props.item.date}
      </div>
      <div className="relative">
        <div
          className="relative cursor-pointer"
          onClick={() => props.handlerClick(props.item)}>
          {props?.item?.image?.includes('.pdf') ? (
            <iframe
              //   sandbox="allow-scripts allow-modal"
              loading="eager"
              src={props.item.image}
              width="100%"
              className="w-full cursor-pointer overflow-hidden pointer-events-none rounded-md border border-gray-200"
              title={props.item.image}></iframe>
          ) : (
            <img
              src={props.item.image}
              alt={props.item.name}
              className="w-full h-40 object-cover object-top rounded-md border border-gray-200"
            />
          )}
        </div>

        <div className="relative flex gap-3 items-start mt-6">
          <img
            src={
              props.item.institution === 'Dicoding'
                ? dataImage[2]
                : props.item.institution === 'HackerRank' ||
                  props.item.institution === 'HR'
                ? dataImage[0]
                : dataImage[1]
            }
            alt={props.item.index}
            className="relative h-12"
          />

          <div className="relative flex flex-col">
            <h1 className="text-base font-medium leading-relaxed text-gray-800">
              {props.item.name}
            </h1>
            <h4 className="text-sm font-light text-gray-500 leading-relaxed">
              {props.item.institution}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
