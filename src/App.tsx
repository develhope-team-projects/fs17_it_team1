import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <div className="dark">
      <BrowserRouter>
        <Link to="/dashboard">dashboard</Link>
        <Routes>
          {/* <Route path="/" element={<Test />} /> */}
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
