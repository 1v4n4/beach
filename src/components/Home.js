import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';
import BeachList from '../containers/BeachList';
import '../CSS/Home.css';

const Home = () => (
  <>
    <h1 className="text-center my-3">
      <FaUmbrellaBeach className="pb-1 pe-1" />
      Cal Beach
    </h1>
    <BeachList />
    <div className="d-flex justify-content-center">
      <p className="down">
        Made by
        <a className="downlink mx-1" href="https://github.com/1v4n4">1v4n4</a>
        © 2021
      </p>
    </div>
  </>
);

export default Home;
