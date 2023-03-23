import { useDispatch } from "react-redux";
import Hamburger_icon from "../assets/Hamburger_icon.png";
import User_icon from "../assets/User_icon.png";
import YouTube_icon from "../assets/YouTube_Logo.svg";
import { toggleMenu } from "../utils/navSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex shadow-lg m-2 p-2">
      <div className="flex w-96 h-8">
        <img
          alt="Hamburger_icon"
          src={Hamburger_icon}
          className="cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />

        <img
          alt="Youtube_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="px-5">
        <input className="w-96 p-1 bg-gray-100 border border-gray-400 rounded-l-full" />
        <button className="bg-gray-100 border border-gray-400 rounded-r-full p-1">
          🔍
        </button>
      </div>
      <div className="w-48">
        <img
          className="h-8"
          alt="User_icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
