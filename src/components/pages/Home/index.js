import React from 'react';
import { Layout } from '../../includes';
import Certification from './Certification';
import CV from './CV';
import Keahlian from './Keahlian';
import Portofolio from './Portofolio';
import Profile from './Profile';

export default function Index() {
  return (
    <Layout>
      <Profile />
      <Keahlian />
      <CV />
      <Certification />
      <Portofolio />

      <footer className="relative w-full bg-neutral-900 py-4 text-white md:flex justify-center items-center text-center font-semibold leading-relaxed tracking-wide hidden">
        <p>
          Abdul Muchtar Astria &copy; 2020. All rights reserved. Built with{' '}
        </p>
      </footer>
    </Layout>
  );
}
