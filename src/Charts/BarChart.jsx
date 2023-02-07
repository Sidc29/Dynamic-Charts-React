import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

function BarChart() {
  const [coinName, setCoinName] = useState([]);
  const [athValue, setATHvalue] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const names = [];
    const values = [];

    // Getting data from our own API
    const getCoinRecords = async () => {
      const dataReq = await fetch(
        "https://crypto-coins-ath.onrender.com/coin-data"
      );
      const dataRes = await dataReq.json();
      dataRes.coins.forEach((coin) => {
        names.push(coin.coin_name);
        values.push(coin.ath_price);
      });
      setLoading(false);

      setCoinName(names);
      setATHvalue(values);

      // console.log(names);
      // console.log(values);
    };
    getCoinRecords();
  }, []);

  return (
    <>
      <section className="section">
        <center>
          {!loading ? (
            <Chart
              type="bar"
              width={1000}
              height={650}
              series={[
                {
                  name: "All Time High Price",
                  // Dynamic Data fetched from API
                  data: [...athValue]
                }
              ]}
              options={{
                plotOptions: {
                  bar: {
                    distributed: true
                  }
                },
                colors: [
                  "#E666B3",
                  "#33991A",
                  "#CC9999",
                  "#B3B31A",
                  "#00E680",
                  "#4D8066",
                  "#809980",
                  "#E6FF80",
                  "#1AFF33",
                  "#999933",
                  "#FF3380",
                  "#CCCC00",
                  "#66E64D",
                  "#4D80CC",
                  "#9900B3",
                  "#E64D66",
                  "#4DB380",
                  "#FF4D4D",
                  "#99E6E6",
                  "#6666FF"
                ],
                title: {
                  text: "All Time High Price of Crypto Coins",
                  style: { fontFamily: "calibri", fontSize: 30 }
                },
                theme: { mode: "light" },

                xaxis: {
                  labels: {
                    style: {
                      fontSize: "18px"
                    }
                  },
                  // Dynamic Data fetched from API
                  categories: [...coinName],
                  title: {
                    text: "Crypto Coins",
                    style: {
                      fontFamily: "calibri",
                      color: "#1D1D1D",
                      fontSize: 25
                    }
                  }
                },

                yaxis: {
                  labels: {
                    formatter: (val) => {
                      return `$${val}`;
                    },
                    style: {
                      fontFamily: "calibri",
                      fontSize: 18,
                      colors: ["#1D1D1D"]
                    }
                  },
                  title: {
                    text: "All Time High Price ($)",
                    style: {
                      fontFamily: "calibri",
                      fontSize: 18,
                      color: "#1D1D1D"
                    }
                  }
                },

                legend: {
                  show: true,
                  positon: "bottom"
                },

                dataLabels: {
                  formatter: (val) => {
                    return `$${val}`;
                  },
                  style: {
                    fontFamily: "calibri",
                    colors: ["#fff"],
                    fontSize: 15
                  }
                }
              }}
            ></Chart>
          ) : (
            <h3 style={{ opacity: 0.7 }}>Loading chart please wait...</h3>
          )}
        </center>
      </section>
    </>
  );
}

export default BarChart;
