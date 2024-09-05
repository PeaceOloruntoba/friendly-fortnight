import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
