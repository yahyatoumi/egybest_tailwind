import axios from "axios";

const searchData = async (query: string) => {
    if (query.length === 0)
        return ;
console.log("hohohohoho" + query.length)
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
            api_key: "c06068454f7e2c73e0e027e7d5bffda1",
            query: query,
        },
    })
    return response.data.results ? response.data.results : response.data;
  } catch (error) {
    throw error;
  }
};

export default searchData;
