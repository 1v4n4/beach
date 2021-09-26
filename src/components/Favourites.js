import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLocation } from 'react-router-dom';
import { FaUmbrellaBeach } from 'react-icons/fa';

const Favourites = () => {
  const location = useLocation();
  const { id } = location.state;
  // eslint-disable-next-line
  const userid = parseInt(id);
  const all = useSelector((state) => state.list).data;
  const favs = useSelector((state) => state.favs).data;
  const beachids = favs.map((fav) => fav.beach_id);
  console.log('badis', beachids);
  console.log('huuu', favs);
  console.log('all', all);
  const favourites = all.filter((favourite) => beachids.includes(favourite.id));
  console.log('inurites', favourites);
  return (
    <div className="favourites-div">
      <h1 className="text-center my-3">
        <FaUmbrellaBeach className="pb-1 pe-1" />
        Your favourite places
      </h1>

      <div className="ing-btn-div">
        <Carousel variant="dark">
          {favourites.map((favourite, index) => (
            <Carousel.Item key={favourite.id}>
              <img
                className="d-block w-100 carusel-photo"
                src={favourite.photo1}
                alt={favourite.name}
              />
              <Carousel.Caption>
                <Link to={{ pathname: `/beach/${favourite.id}`, state: { beachid: `${favourite.id}` } }}><h2>{favourite.name}</h2></Link>
                <p className="fs-5">{favourite.description}</p>
                <p className="fs-4">
                  {index + 1}
                  /
                  {' '}
                  {favourites.length}
                </p>

              </Carousel.Caption>

            </Carousel.Item>

          ))}
        </Carousel>
      </div>

    </div>
  );
};

export default Favourites;
