import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/config";
const VideoContainer = () => {
  async function getVideo() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
  }
  useEffect(() => {
    getVideo();
  }, []);
  return <div>VideoContainer</div>;
};

export default VideoContainer;
