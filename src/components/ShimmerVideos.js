const ShimmerVideos = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {Array(50)
        .fill("")
        .map((e, i) => (
          <div className="w-96 h-64 p-2 shadow-lg m-2" key={i}>
            <div className="w-[23rem] h-40 my-2 bg-gray-300 rounded-lg"></div>
            <div className="w-[23rem] h-6 my-2 bg-gray-300 rounded-sm"></div>
            <div className="w-[23rem] h-4 my-2 bg-gray-300 rounded-sm"></div>
            
          </div>
        ))}
    </div>
  );
};

export default ShimmerVideos;
