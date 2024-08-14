import axios from 'axios';
import { ApiUrls, MoviePath } from '../constansts';

const getMoviesByCategory = async (search) => {
  try {
    const response = await axios.get(`${ApiUrls}${MoviePath.movies}?query=${search}`, {
    },
  );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export default getMoviesByCategory;
