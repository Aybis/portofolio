import React from 'react';

export default function Index(props) {
  return (
    <div className="relative mt-4 bg-white p-4 rounded-md  text-zinc-800 h-fit">
      <div className={['absolute top-2 right-0'].join(' ')}>
        <img
          src={props.item.image}
          alt=""
          className="h-16 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold tracking-wide leading-relaxed">
        {props.item.name}
      </h3>
      {props.item.position.map((position, index) => (
        <div key={index} className="relative mt-4">
          <h4 className="text-base font-medium tracking-wide leading-relaxed">
            {position.name}
          </h4>
          <p className="text-sm font-medium tracking-wide leading-relaxed mb-4">
            {position.year}
          </p>
          <p className="font-normal text-sm mb-2">Tanggung Jawab : </p>

          <ul className="list-disc list-inside ml-4 mb-3">
            {position.responsibility.map((responsibility, index) => (
              <li
                key={index}
                className="text-sm font-light tracking-wide leading-relaxed">
                {responsibility}
              </li>
            ))}
          </ul>
          <p className="font-normal text-sm mb-2">Project : </p>
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
  );
}
