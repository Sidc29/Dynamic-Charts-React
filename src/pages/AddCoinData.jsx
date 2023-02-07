import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import Navbar from "../components/Navbar";
import Axios from "axios";

import "./UpdateChart.css";

const Update = () => {
  const [isSuccess, setSuccess] = useState(false);

  const url = "https://crypto-coins-ath.onrender.com/coin-data";

  const [data, setData] = useState({
    coinName: "",
    coinPrice: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevValues) => {
      return { ...prevValues, [name]: _.startCase(_.toLower(value)) };
    });
  };

  // Submitting Coin name and ATH price values to our API
  const submitData = (event) => {
    event.preventDefault();
    if (!data.coinName || !data.coinPrice) {
      return alert("Both fields are required.");
    }
    Axios.post(url, {
      coin_name: data.coinName,
      ath_price: data.coinPrice
    }).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
      }
    });
  };

  // Success Alert for post request (disappears after 3 secs)
  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSuccess]);

  return (
    <>
      <Navbar />
      <section className="section">
        <h2>Add New Chart Data (Only for Bar Chart)</h2>
        <form onSubmit={submitData}>
          {isSuccess && (
            <div style={{ color: "green", fontWeight: 600 }}>
              Successfully added a new coin!
            </div>
          )}
          <input
            onChange={handleChange}
            type="text"
            name="coinName"
            value={data.coinName}
            placeholder="Enter Coin Name"
          />
          <input
            onChange={handleChange}
            type="number"
            name="coinPrice"
            value={data.coinPrice}
            placeholder="Enter ATH Price"
          />
          <button type="submit">Add Coin</button>
          <Link to="/barchart">
            <p style={{ color: "#1d1d1d", fontWeight: "bold", opacity: 0.7 }}>
              Click here to check the Chart
            </p>
          </Link>
        </form>
      </section>
    </>
  );
};
export default Update;
