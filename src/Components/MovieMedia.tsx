import trailer from "../imgs/trailer.jpg"
import { MdOutlineVideoLibrary } from "react-icons/md";

interface Props {
    data: MovieDetails;
}

const MovieMedia: React.FC<Props> = (props) => {
    return (
        <div className="pb-5 flex gap-1 max-w-[1300px] h-96 mx-auto lg:px-10 px-5">
            <div className="h-full w-3/12 border">
                <img
                    src={"https://image.tmdb.org/t/p/original" + props.data.poster_path}
                    alt=""
                    className="h-full w-full"
                />
            </div>
            <div className="h-full w-9/12 lg:w-7/12">
                <img
                    src={trailer}
                    alt=""
                    className="h-full w-full"
                />
            </div>
            <div className="hidden lg:flex w-2/12 h-full bg-green-500">
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default MovieMedia;