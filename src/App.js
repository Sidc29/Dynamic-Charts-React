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
        <Route path="/" element={<Home />}></Route>
        <Route path="update" element={<AddCoinData />} />
        <Route path="delete" element={<DeleteCoin />} />
        <Route path="barchart" element={<BarChartPage />} />
        <Route path="linechart" element={<LineChartPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
