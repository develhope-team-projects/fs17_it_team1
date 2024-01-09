import Dashboard from "./dashboard/Dashboard";
import Store from "./store/Store";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/store" element ={<Store/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
