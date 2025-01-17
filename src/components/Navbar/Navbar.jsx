import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="mx-8 sticky left-0 top-0">
      <nav className="p-2 w-[100%] rounded-3xl bg-[#00A3FF] flex justify-between">
        <ul className="flex justify-start w-1/5 px-5">
          <li className="p-2 text-[white] font-semibold hover:text-black hover:bg-white hover:rounded-3xl">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 text-[white] font-semibold hover:text-black hover:bg-white hover:rounded-3xl">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="p-2 text-[white] font-semibold hover:text-black hover:bg-white hover:rounded-3xl">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 text-[white] font-semibold hover:text-black hover:bg-white hover:rounded-3xl">
            Contact
          </li>
        </ul>
        <div className="w-[50px] justify-center">
          <Link to="/">
            <img className="" src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex justify-end px-5 w-1/5">
          <li className="p-2 text-[white]  hover:text-black hover:bg-white hover:rounded-3xl">
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </li>
          <li className="p-2 text-[white]  hover:text-black hover:bg-white hover:rounded-3xl">
            <Link to="/notifiacation">
              <FontAwesomeIcon icon={faBell} />
            </Link>
          </li>

          <li className="p-2 text-[white]  hover:text-black hover:bg-white hover:rounded-3xl">
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
