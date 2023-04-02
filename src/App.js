import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCoinData from "./pages/AddCoinData";
import DeleteCoin from "./pages/DeleteCoin";
import BarChartPage from "./pages/BarChartPage";
import LineChartPage from "./pages/LineChartPage";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Documentation" />}></Route>
        <Route path="update" element={<AddCoinData title="Add coin" />} />
        <Route path="delete" element={<DeleteCoin title="Delete coin" />} />
        <Route path="barchart" element={<BarChartPage title="Bar Chart" />} />
        <Route
          path="linechart"
          element={<LineChartPage title="Line Chart" />}
        />
        <Route path="*" element={<Error title="Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
