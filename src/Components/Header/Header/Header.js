import React from "react";
import HeaderTop from "../HeaderTop/HeaderTop";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <HeaderTop />
      <Navbar />
    </header>
  );
}
