import React from "react";
import Header from "../components/containers/Header";
import Navbar from "../components/containers/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/containers/Footer";

export default function RootLayout() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />
      <div className="w-full sticky top-0 bg-blue-900">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
