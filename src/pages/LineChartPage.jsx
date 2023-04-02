import Navbar from "../components/Navbar";
import LineChart from "../Charts/LineChart";
import { useTitle } from "../hooks/useTitle";

const LineChartPage = ({ title }) => {
  useTitle(title);

  return (
    <>
      <Navbar />
      <section className="section">
        <h2>Line Chart using Static Data</h2>
        <LineChart />
      </section>
    </>
  );
};

export default LineChartPage;
