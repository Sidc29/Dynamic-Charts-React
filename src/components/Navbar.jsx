import { NavLink } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">
        <span>
          <FontAwesomeIcon icon={faHome} /> Home
        </span>
      </NavLink>
      <NavLink to="/update" className="nav-item">
        <span>
          <FontAwesomeIcon icon={faPlus} /> Add Coin
        </span>
      </NavLink>
      <NavLink to="/delete" className="nav-item">
        <span>
          <FontAwesomeIcon icon={faTrash} /> Delete Coin
        </span>
      </NavLink>
      <NavLink to="/barchart" className="nav-item">
        <span>
          <FontAwesomeIcon icon={faChartColumn} /> Barchart(Dynamic)
        </span>
      </NavLink>
      <NavLink to="/linechart" className="nav-item">
        <span>
          <FontAwesomeIcon icon={faChartLine} /> Linechart(Static)
        </span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
