import BarChart from "../Charts/BarChart";
import Navbar from "../components/Navbar";

const BarChartPage = () => {
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
