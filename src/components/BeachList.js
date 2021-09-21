import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getList } from '../actions/listActions';
import Filter from './Filter';

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
      return <h1 style={{ marginTop: '25vh' }}>Loading</h1>;
    }

    if (list.data && list.data.length > 0) {
      let beaches = [];
      if (filter === 'All' || filter === 'COUNTIES') { beaches = list.data; } else {
        beaches = list.data.filter((beach) => beach.county === filter);
      }
      return (
        <div className="ing-btn-div">
          {beaches.map((beach) => (
            <div className="beach-card" key={beach.id}>
              <Link to={{ pathname: `/beach/${beach.id}`, state: { beachid: `${beach.id}` } }}><h2>{beach.name}</h2></Link>
              <h4>{beach.location}</h4>
            </div>
          ))}
        </div>

      );
    }
    if (list.errorMSG !== '') {
      return <h1>{list.errorMSG}</h1>;
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
