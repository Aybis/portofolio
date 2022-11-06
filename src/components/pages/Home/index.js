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
    </Layout>
  );
}
