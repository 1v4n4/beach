import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getList } from '../actions/listActions';

const BeachList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  console.log('list', list);

  const FetchIng = () => {
    dispatch(getList());
  };

  useEffect(() => {
    FetchIng();
  }, []);

  const showData = () => {
    if (list.loading) {
      return <h1 style={{ marginTop: '25vh' }}>Loading</h1>;
    }

    if (list.data && list.data.length > 0) {
      return (
        <div className="ing-btn-div">
          {list.data.map((beach) => (
            <div className="beach-card" key={beach.id}>
              <Link to={`/beach/${beach.id}`}><h2>{beach.name}</h2></Link>
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
    <div>{showData()}</div>
  );
};

export default BeachList;
