import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import "./Navbar.css";
import P from "./img/VectorP.svg";
import O from "./img/VectorO.svg";
import W from "./img/VectorW.svg";
import Punto from "./img/VectorPunto.svg";
import Search from "./img/search.svg";
import User from "./img/user.svg";
import Bag from "./img/bag.svg";

export default function Navbar() {
  const { cant_total } = useContext(AppContext);

  return (
    <div>
      <div className="row justify-content-center containerNavbar">
        <div className="col-auto align-content-end">
          <h1>
            <img src={P} alt="Vector P" className="vector p" />
            <img src={O} alt="Vector O" className="vector o" />
            <img src={W} alt="Vector W" className="vector w" />
            <img src={Punto} alt="Vector Punto" className="vector punto" />
          </h1>
        </div>

        <div className="row justify-content-end navbarButton">
          <div className="col-8">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a href="#" class="nav-link" aria-current="page">
                  Sale
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Colección
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <button className="buttonNavbar">
              <img src={Search} alt="" />
            </button>
            <button className="buttonNavbar">
              <img src={User} alt="" />
            </button>
            <button className="buttonNavbar">
              <img src={Bag} alt="" />
              <p className="cantidadItems">{cant_total}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
