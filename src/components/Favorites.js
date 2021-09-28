import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLocation } from 'react-router-dom';
import { FaUmbrellaBeach } from 'react-icons/fa';
// import { getFavs } from '../actions/favsActions';

const Favorites = () => {
  // const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;
  // eslint-disable-next-line
  const userid = parseInt(id);
  const all = useSelector((state) => state.list).data;

  const favs = useSelector((state) => state.favs).data;
  console.log('favorites', favs);
  const beachids = favs.map((fav) => fav.beach_id);
  console.log('bachids', beachids);
  const favorites = all.filter((fav) => beachids.includes(fav.id));
  console.log('ites', favorites);
  return (
    <div className="favorites-div">
      <h1 className="text-center my-3">
        <FaUmbrellaBeach className="pb-1 pe-1" />
        Your favorite places
      </h1>

      <div className="ing-btn-div">
        <Carousel variant="dark">
          {favorites.map((favorite, index) => (
            <Carousel.Item key={favorite.id}>
              <img
                className="d-block w-100 carusel-photo"
                src={favorite.photo1}
                alt={favorite.name}
              />
              <Carousel.Caption>
                <Link to={{ pathname: `/beach/${favorite.id}`, state: { beachid: `${favorite.id}` } }}><h2>{favorite.name}</h2></Link>
                <p className="fs-5">{favorite.description}</p>
                <p className="fs-4">
                  {index + 1}
                  /
                  {' '}
                  {favorites.length}
                </p>

              </Carousel.Caption>

            </Carousel.Item>

          ))}
        </Carousel>
      </div>

    </div>
  );
};

export default Favorites;
