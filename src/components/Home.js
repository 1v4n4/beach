import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';
import BeachList from './BeachList';
import '../CSS/Home.css';

const Home = () => (
  <>
    <h1 className="text-center my-3">
      <FaUmbrellaBeach className="pb-1 pe-1" />
      Cal Beach
    </h1>
    <p className="text-center fs-4 font-italic mx-5">Explore the coast of California and find your perfect place</p>

    <BeachList />

  </>
);

export default Home;
