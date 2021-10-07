import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import '../CSS/beach.css';
import { getBeach } from '../actions/beachActions';
import Favs from './Favs';

const Beach = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { beachid } = location.state;
  // eslint-disable-next-line
  const b = parseInt(beachid);
  const logged = useSelector((state) => state.user.logged);

  const FetchBeach = () => {
    dispatch(getBeach(b));
  };

  useEffect(() => {
    FetchBeach();
  }, []);

  const showData = () => {
    const beach = useSelector((state) => state.beach);
    if (beach.loading) {
      return <h1 className="nav-link bg-light text-center text-dark mt-5">Loading</h1>;
    }

    if (beach.data.beach) {
      const item = beach.data.beach;
      return (
        <Container>
          <h1 className="text-center mx-3">{item.name}</h1>
          <h4 className="text-center m-3">{item.county}</h4>
          <h5 className="text-center mx-3">{item.description}</h5>
          <Carousel variant="dark" className="my-4">
            <Carousel.Item>
              <img
                className="d-block w-100 carusel-photo"
                src={item.photo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carusel-photo"
                src={item.photo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carusel-photo"
                src={item.photo3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carusel-photo"
                src={item.photo4}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>

          <div className="d-flex justify-content-around m-3">
            <ListGroup as="ul" className="list1">
              <ListGroup.Item as="li" className="bg-secondary first-line text-center fs-6 pt-1" active>
                DIRECTIONS
              </ListGroup.Item>
              <ListGroup.Item as="li" className="p-3 text-center">{item.location}</ListGroup.Item>
              <ListGroup.Item as="li" className="bg-secondary first-line text-center fs-6 pt-1" active>
                FACILITIES
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div className="d-flex justify-content-around ms-1">

            <ListGroup as="ul" horizontal className="pb-5">
              {item.campground === 'Yes' && <ListGroup.Item as="li" className="p-0 me-2">Campground</ListGroup.Item>}
              {item.parking === 'Yes' && <ListGroup.Item as="li" className="p-0 me-2">Parking</ListGroup.Item>}
              {item.restrooms === 'Yes' && <ListGroup.Item as="li" className="p-0">Restrooms</ListGroup.Item>}
            </ListGroup>
          </div>
        </Container>
      );
    }
    if (beach.errorMSG !== '') {
      return <h1 className="nav-link bg-light text-center text-dark mt-5">{beach.errorMSG}</h1>;
    }
    return <p />;
  };

  return (
    <>
      <div className="star-div text-center my-2">
        { logged
      && <Favs beachid={b} />}
        {!logged && <p className="bg-secondary mx-5">Log in to add to favourites</p>}
      </div>
      {showData()}
    </>
  );
};

export default Beach;
