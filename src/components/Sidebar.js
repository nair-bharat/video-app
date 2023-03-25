import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuOpen = useSelector((store) => store.nav.isMenuOpen);

  if (!menuOpen) {
    return null;
  }

  return (
    <div className="shadow-lg">
      <ul className="w-64">
        <Link to="/">
          <li className="px-5 py-2">Home</li>
        </Link>
        <li className="px-5 py-2">Shorts</li>
        <li className="px-5 py-2">Subscriptions</li>
        <li className="px-5 py-2">Library</li>
        <li className="px-5 py-2">History</li>
        <li className="px-5 py-2">Your Videos</li>
        <li className="px-5 py-2">Watch Later</li>
      </ul>
    </div>
  );
};

export default Sidebar;
