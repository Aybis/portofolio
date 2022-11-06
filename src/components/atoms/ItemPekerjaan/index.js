import React from 'react';

export default function Index(props) {
  return (
    <div className="relative mt-4 bg-white p-4 rounded-md">
      <h3 className="text-lg font-medium tracking-wide leading-relaxed text-zinc-800">
        {props.item.name}
      </h3>
      {props.item.position.map((position, index) => (
        <div key={index} className="relative mt-4">
          <h4 className="text-lg font-medium tracking-wide leading-relaxed text-zinc-800">
            {position.name}
          </h4>
          <p className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800 mb-4">
            {position.year}
          </p>
          <p>Tanggung Jawab : </p>

          <ul className="list-disc list-inside ml-4 mb-3">
            {position.responsibility.map((responsibility, index) => (
              <li
                key={index}
                className="text-sm font-medium tracking-wide leading-relaxed text-zinc-800">
                {responsibility}
              </li>
            ))}
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
  );
}
