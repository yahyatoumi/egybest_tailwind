import axios from "axios";

const fetchData = async (movieId: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=c06068454f7e2c73e0e027e7d5bffda1&language=en-US`,
    );
    return response.data.results ? response.data.results : response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
