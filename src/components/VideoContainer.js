import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/config";
import ShimmerVideos from "./ShimmerVideos";
import VideoCard from "./VideoCard";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  async function getVideo() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data?.json();
    console.log(json);
    setVideos(json?.items);
  }
  useEffect(() => {
    getVideo();
  }, []);

  if (videos.length === 0) {
    return <ShimmerVideos />;
  }
  return (
    <div className="flex flex-wrap cursor-pointer">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
