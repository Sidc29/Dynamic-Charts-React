import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useTitle } from "../hooks/useTitle";

const Error = ({ title }) => {
  useTitle(title);

  return (
    <>
      <section className="section">
        <Navbar />
        <h2>Error 404 - Page Not Found</h2>
        <Link to="/">
          <h4>Go Back to Home</h4>
        </Link>
      </section>
    </>
  );
};
export default Error;
