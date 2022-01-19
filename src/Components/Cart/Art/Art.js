import React from "react";
import "./Art.css";
import Saco from "./img/image 1.png";
import Jean from "./img/image 2.png";
import Trash from "./img/trash.svg";

export default function Art() {
  return (
    <div className="container art">
      <div className="col-8">
        <div className="row listProductTitles">
          <div className="col-4">
            <p>ART.</p>
          </div>
          <div className="col-1">
            <p>Talle</p>
          </div>
          <div className="col-2">
            <p>Cant.</p>
          </div>
          <div className="col-3">
            <p>Precio</p>
          </div>
          <div className="col-1">
            <p>Borrar</p>
          </div>
        </div>
        <hr className="hrListP" />
        <div className="row listProduct">
          <div className="col-4">
            <div className="d-flex">
              <img src={Saco} alt="" className="imgProduct" />
              <div className="descriptionItem">
                <p className="titleProduct">Saco Cove Long</p>
                <p className="descripProduct">Color: Rojo</p>
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="d-flex">
              <p className="talle">44</p>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex cantidadesButtons">
              <button>+</button>
              <p className="cantidad">C</p>
              <button>-</button>
            </div>
          </div>
          <div className="col-3">
            <p className="precio">
              <del> $9.895 </del> <span>$7.421</span>
            </p>
          </div>
          <div className="col-1">
            <p>
              <img src={Trash} alt="" className="trash" />
            </p>
          </div>
        </div>
        <hr className="hrListP" />

        <div className="row listProduct">
          <div className="col-4">
            <div className="d-flex ">
              <img src={Jean} alt="" className="imgProduct" />
              <div className="descriptionItem">
                <p className="titleProduct">Jean Hadid</p>
                <p className="descripProduct">Color: Azul oscuro</p>
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="d-flex">
              <p className="talle">44</p>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex cantidadesButtons">
              <button>+</button>
              <p className="cantidad">C</p>
              <button>-</button>
            </div>
          </div>
          <div className="col-3">
            <p className="precio">$7.421</p>
          </div>
          <div className="col-1">
            <p>
              <img src={Trash} alt="" className="trash" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
