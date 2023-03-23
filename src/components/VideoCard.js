const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  console.log(video);
  return (
    <div className="w-96 h-auto">
      <img alt="youtube-video" src={snippet.thumbnails.medium.url} className="w-50"></img>
      <h2 className="font-bold">{snippet.title}</h2>
      <h2>{snippet.channelTitle}</h2>
      <h2>{statistics.viewCount} views</h2>
    </div>
  );
};

export default VideoCard;
