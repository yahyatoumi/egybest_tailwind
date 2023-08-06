import axios from 'axios';

const fetchData = async (type : string) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=c06068454f7e2c73e0e027e7d5bffda1&language=en-US`);
        return res.data.results;
    } catch (err) {
        console.log(err, "line 22");
    }
}

export default fetchData;