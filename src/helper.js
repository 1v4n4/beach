import { getUser } from './localStorage';

const msgs = (msg) => {
  const msgDiv = document.getElementById('forAlert');
  msgDiv.innerHTML = `<p className="msgs">${msg}</p>`;
  setTimeout(() => {
    msgDiv.innerHTML = '';
  }, 1000);
};

const logged = () => {
  const result = getUser();
  if (result) return true;
  return false;
};
const setFavState = (favs, userid, beachid) => {
  const array = favs
    .filter((fav) => fav.user_id === userid && fav.beach_id === beachid);
  console.log('array', array);

  console.log('in setsfavstate arr length', array.length);
  if (array.length) {
    return true;
  }
  return false;
};
const toggleFav = (favState) => {
  if (favState) {
    return false;
  }
  return true;
};

export
{
  msgs, logged, toggleFav, setFavState,
};
