import React from "react";
import "./Footer.css";
import Ig from "./img/insta.svg";
import Fb from "./img/face.svg";
import P from "./img/VectorPs.svg";
import O from "./img/VectorOs.svg";
import W from "./img/VectorWs.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="redes">
              <img src={Ig} alt="" className="iconsRedes" />
              <img src={Fb} alt="" className="iconsRedes" />
            </div>
          </div>
          <div className="col-5">
            <ul className="listFooter">
              <li>Faqs</li>
              <li>Nosotros</li>
              <li>Locales</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className="col-4">
            <div className="powVectors">
              <img src={P} alt="" />
              <img src={O} alt="" />
              <img src={W} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
