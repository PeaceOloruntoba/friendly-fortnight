import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ServicesDetails from "./pages/ServicesDetails";
import { Suspense } from "react";

export default function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="w-screen h-screen flex items-center justify-center text-center">
              <span className="text-xl font-semibold animate-pulse">
                Loading
              </span>
            </div>
          }
        >
          <ScrollToTop />
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route
                path="services/:serviceName"
                element={<ServicesDetails />}
              />
              <Route path="portfolio" element={<Portfolio />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
