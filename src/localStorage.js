const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => {
  const result = JSON.parse(localStorage.getItem('user'));
  return result;
};

export { setUser, getUser };
