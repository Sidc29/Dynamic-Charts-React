import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import _ from "lodash";
import Axios from "axios";

import "./UpdateChart.css";

const Delete = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);

  const [coinName, setCoinName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setCoinName(_.startCase(_.toLower(value)));
  };

  // Submitting Coin name and ATH price values to our API
  const submitData = (event) => {
    event.preventDefault();
    if (!coinName) {
      return alert("Please provide a coin name you want to delete.");
    }
    Axios.delete(
      `https://crypto-coins-ath.onrender.com/coin-data/${coinName}`
    ).then((res) => {
      console.log(res.data.coin.deletedCount === 0);
      if (res.status === 200 && res.data.coin.deletedCount !== 0) {
        setSuccess(true);
      }
      if (res.data.coin.deletedCount === 0) {
        setError(true);
      }
    });
  };

  // Success Alert for delete request (disappears after 3 secs)
  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSuccess]);

  // Error Alert for delete request (disappears after 3 secs)
  useEffect(() => {
    if (isError) {
      const timeoutId = setTimeout(() => {
        setError(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isError]);

  return (
    <>
      <Navbar />
      <section className="section">
        <h2>Delete Coin (Only for Bar Chart)</h2>
        <form onSubmit={submitData}>
          <input
            onChange={handleChange}
            type="text"
            name="coinName"
            value={coinName}
            placeholder="Enter Coin Name"
          />
          {isSuccess && (
            <div style={{ color: "green", fontWeight: 600 }}>
              Successfully Deleted {coinName}
            </div>
          )}
          {isError && (
            <div style={{ color: "red", fontWeight: 600 }}>
              No coin with name {coinName} found
            </div>
          )}
          <button type="submit">Submit</button>
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
export default Delete;
