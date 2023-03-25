import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <div className="flex justify-center">
        <ButtonList />
      </div>

      <VideoContainer />
    </div>
  );
};

export default MainContainer;
