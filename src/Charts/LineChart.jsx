import Chart from "react-apexcharts";

import { data, colors, categories } from "./LineChartData";

function LineChart() {
  return (
    <>
      <section className="section">
        <center>
          <Chart
            type="line"
            width={1000}
            height={650}
            // Static data is imported from LineChartData.js
            series={data}
            options={{
              // imported colors array
              colors: [...colors],
              title: {
                text: "Electronics Goods Sale in 2022",
                style: { fontFamily: "calibri", fontSize: 30 }
              },
              xaxis: {
                labels: {
                  style: {
                    fontSize: "15px"
                  }
                },
                title: {
                  text: "Electronics Goods Sale in 2022",
                  style: {
                    fontFamily: "calibri",
                    color: "#1D1D1D",
                    fontSize: 25
                  }
                },
                // Imported categories
                categories: [...categories]
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
                  text: "Sales in K",
                  style: {
                    fontFamily: "calibri",
                    fontSize: 18,
                    colors: ["#1D1D1D"]
                  }
                }
              }
            }}
          ></Chart>
        </center>
      </section>
    </>
  );
}

export default LineChart;
