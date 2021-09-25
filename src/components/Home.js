import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';
import BeachList from './BeachList';
import '../CSS/Home.css';

const Home = () => (
  <>
    <h1 className="text-center my-4">
      <FaUmbrellaBeach className="pb-1 pe-1" />
      Cal Beach
    </h1>
    <BeachList />

  </>
);

export default Home;
