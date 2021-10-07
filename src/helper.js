const msgs = (msg) => {
  const msgDiv = document.getElementById('forAlert');
  msgDiv.innerHTML = `<p className="msgs">${msg}</p>`;
  setTimeout(() => {
    msgDiv.innerHTML = '';
  }, 2000);
};

const setFavState = (favs, userid, beachid) => {
  const array = favs
    .filter((fav) => fav.user_id === userid && fav.beach_id === beachid);
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
  msgs, toggleFav, setFavState,
};
