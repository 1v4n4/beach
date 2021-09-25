import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { getList } from '../actions/listActions';
import Filter from '../components/Filter';
import '../CSS/beachList.css';

const BeachList = () => {
  const [filter, setFilter] = useState('All');
  const dispatch = useDispatch();

  const list = useSelector((state) => state.list);

  console.log('list', list);
  const FetchBeach = () => {
    dispatch(getList());
  };

  useEffect(() => {
    FetchBeach();
  }, []);

  const showData = () => {
    if (list.loading) {
      return <h1 className="nav-link bg-light text-center text-dark mt-5">Loading</h1>;
    }

    if (list.data && list.data.length > 0) {
      let beaches = [];
      if (filter === 'All' || filter === 'COUNTIES') { beaches = list.data; } else {
        beaches = list.data.filter((beach) => beach.county === filter);
      }
      return (
        <div className="ing-btn-div">
          <Carousel variant="dark">
            {beaches.map((beach, index) => (
              <Carousel.Item key={beach.id}>
                <img
                  className="d-block w-100 carusel-photo"
                  src={beach.photo1}
                  alt={beach.name}
                />
                <Carousel.Caption>
                  <Link to={{ pathname: `/beach/${beach.id}`, state: { beachid: `${beach.id}` } }}><h2>{beach.name}</h2></Link>
                  <p className="fs-5">{beach.description}</p>
                  <p className="fs-4">
                    {index + 1}
                    /
                    {' '}
                    {beaches.length}
                  </p>

                </Carousel.Caption>

              </Carousel.Item>

            ))}
          </Carousel>
        </div>
      );
    }
    if (list.errorMSG !== '') {
      return <h1 className="nav-link bg-light text-center text-dark mt-5">{list.errorMSG}</h1>;
    }
    return <p />;
  };

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      {showData()}
    </div>
  );
};

export default BeachList;
