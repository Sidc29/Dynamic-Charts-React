import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTitle } from "../hooks/useTitle";

const Home = ({ title }) => {
  useTitle(title);

  return (
    <>
      <Navbar />
      <section className="section documentation">
        <h2>Home - Documentation</h2>
        <p>
          The project is a dynamic data visualization tool developed using
          React.js, node.js, express.js, and other backend technologies. It
          features a bar chart that dynamically updates its data through a
          custom API, with the ability to add or delete data using Axios library
          for GET, POST, and DELETE requests, accompanied by real-time alerts to
          confirm success or failure of the operations.
          <br />
          <br />
          <span>
            The bar chart is built with the help of the Apexcharts library, and
            the project also includes a Line Chart demonstrating the use of the
            Apexcharts library for creating line charts with static data.
            Navigation is made easy with the use of React Router v6, allowing
            users to switch between pages such as Home, Add coin, Delete coin,
            Bar Chart page, and Line Chart page.
          </span>
        </p>
        <h3>API Reference</h3>
        <div className="apiRef">
          <p>
            The API is built using Node.js, express.js, mongoDB, and other
            backend technologies and provides information about cryptocurrency
            coin names and their all-time high prices.
          </p>
          <br />
          <strong>API Endpoint: </strong>
          <span className="apiURL">
            https://crypto-coins-ath.onrender.com/coin-data
          </span>
          <br />
          <br />
          <h3>Get all coin data:</h3>
          <ul>
            <li>
              Method: <strong>GET</strong>
            </li>
            <li>
              <strong>Endpoint:</strong>{" "}
              <span className="apiURL">
                https://crypto-coins-ath.onrender.com/coin-data
              </span>
            </li>
            <li>
              <strong>Response:</strong> Returns a JSON object containing the
              coin names and their all-time high prices.
            </li>
          </ul>
          <br />
          <h3>Add new coin data:</h3>
          <ul>
            <li>
              Method: <strong>POST</strong>
            </li>
            <li>
              <strong>Endpoint:</strong>{" "}
              <span className="apiURL">
                https://crypto-coins-ath.onrender.com/coin-data
              </span>
            </li>
            <li>
              <ul>
                <strong>Request Body:</strong> JSON object containing the coin
                name and its all-time high price.
              </ul>
              <strong>Response:</strong> Returns a JSON object confirming the
              addition of the new coin data.
            </li>
          </ul>
          <br />
          <h3>Delete a coin:</h3>
          <ul>
            <li>
              Method: <strong>DELETE</strong>
            </li>
            <li>
              <strong>Endpoint:</strong>{" "}
              <span className="apiURL">
                https://crypto-coins-ath.onrender.com/coin-data/[COIN_NAME_HERE]
              </span>
            </li>
            <li>
              <strong>Response:</strong> Returns a JSON object confirming the
              deletion of the coin data.
            </li>
          </ul>
          <br />
          <h3>Note:</h3>
          <ul>
            <li>The all-time high price should be a numerical value.</li>
            <li>The coin name should be unique.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
