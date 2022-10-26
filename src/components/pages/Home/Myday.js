import React from 'react';
import { Layout } from '../../includes';

export default function Myday() {
  return (
    <Layout>
      <div className="relative grid grid-cols-1 gap-4 p-4">
        {/* Description */}
        <div className="relative md:flex md:ml-14 justify-center items-center md:h-screen">
          <div className="relative flex flex-col">
            <h1>Myday</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              pariatur perferendis vero a, id laboriosam voluptates amet vel
              autem quia consequuntur voluptas voluptate sit expedita dicta.
              Eveniet harum fugiat voluptates?
            </p>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-gonea via-goneb to-gonec">
          Images
        </div>
      </div>
    </Layout>
  );
}
