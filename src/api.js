import axios from 'axios';

const postFav = async (url, data) => {
  const result = await axios.post(url, data);
  return result.data;
};

export default postFav;
