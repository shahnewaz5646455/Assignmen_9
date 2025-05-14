import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Mainlayout() {
  return (
    <div className="bg-green-50">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
}
