import Navbar from "../components/Navbar";
import LineChart from "../Charts/LineChart";
import Footer from "../components/Footer";

const LineChartPage = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <h2>Line Chart using Non-Dynamic Data</h2>
        <LineChart />
      </section>
      <Footer></Footer>
    </>
  );
};

export default LineChartPage;
