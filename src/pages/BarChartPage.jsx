import BarChart from "../Charts/BarChart";
import Navbar from "../components/Navbar";
import { useTitle } from "../hooks/useTitle";

const BarChartPage = ({ title }) => {
  useTitle(title);
  return (
    <>
      <Navbar />
      <section className="section">
        <h2>Bar Chart using Dynamic Data</h2>
        <BarChart />
      </section>
    </>
  );
};

export default BarChartPage;
