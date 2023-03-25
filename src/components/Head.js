import { useDispatch } from "react-redux";
import Hamburger_icon from "../assets/Hamburger_icon.png";
import User_icon from "../assets/User_icon.png";
import YouTube_icon from "../assets/YouTube_Logo.svg";
import { toggleMenu } from "../utils/navSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/config";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  //console.log(searchQuery);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
  };
  useEffect(() => {
    const timer = setTimeout(() => getSearchResults(), 200);

    return (cleanup = () => {
      clearTimeout(timer);
    });
  }, [searchQuery]);

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
      <div>
        <div className="px-5">
          <input
            className="w-96 p-1 bg-gray-100 border border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-gray-100 border border-gray-400 rounded-r-full p-1">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="border border-gray-100 absolute bg-white rounded-lg mx-5">
            <ul className="w-[24rem]">
              {searchSuggestions.map((suggestions) => (
                <li className="p-2 hover:bg-gray-200" key={suggestions}>
                  🔍 {suggestions}
                </li>
              ))}
            </ul>
          </div>
        )}
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
