import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="nav-item">
          <FontAwesomeIcon icon={faHome} /> Home
        </span>
      </Link>
      <Link to="/update">
        <span className="nav-item">
          <FontAwesomeIcon icon={faPlus} /> Add Coin
        </span>
      </Link>
      <Link to="/delete">
        <span className="nav-item">
          {" "}
          <FontAwesomeIcon icon={faTrash} /> Delete Coin
        </span>
      </Link>
      <Link to="/barchart">
        <span className="nav-item">
          {" "}
          <FontAwesomeIcon icon={faChartColumn} /> Barchart(Dynamic)
        </span>
      </Link>
      <Link to="/linechart">
        <span className="nav-item">
          <FontAwesomeIcon icon={faChartLine} /> Linechart(Static)
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
