import React from "react";
import Header from "../components/containers/Header";
import Navbar from "../components/containers/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/containers/Footer";

export default function RootLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
