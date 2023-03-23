const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  console.log(video);
  return (
    <div className="w-72 h-auto p-2 shadow-lg m-2">
      <img alt="youtube-video" src={snippet.thumbnails.medium.url} className="rounded-lg"></img>
      <h2 className="font-bold">{snippet.title}</h2>
      <h2>{snippet.channelTitle}</h2>
      <h2>{statistics.viewCount} views</h2>
    </div>
  );
};

export default VideoCard;
