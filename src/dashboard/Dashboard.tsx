import { Link, Routes } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <Link to="/dashboard/test">Test</Link>
      <Routes>{/* <Route path="/" element={<Test />} /> */}</Routes>
    </div>
  );
}
