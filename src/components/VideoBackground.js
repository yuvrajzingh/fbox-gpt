import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=rLbeO4-4RIeJ7x4g;&start=20;&autoplay=1;&loop=1;&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; loop"
      ></iframe>
    </div>
  );
  
};

export default VideoBackground;
