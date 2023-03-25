import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/config";
import ShimmerVideos from "./ShimmerVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  async function getVideo() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data?.json();
    //console.log(json);
    setVideos(json?.items);
  }
  useEffect(() => {
    getVideo();
  }, []);

  if (videos.length === 0) {
    return <ShimmerVideos />;
  }
  return (
    <div className="flex flex-wrap cursor-pointer justify-center">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
