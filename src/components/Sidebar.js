import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";

const Sidebar = () => {
  const menuOpen = useSelector((store) => store.nav.isMenuOpen);

  if (!menuOpen) {
    return null;
  }

  return (
    <div className="shadow-lg">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
    </div>
  );
};

export default Sidebar;
