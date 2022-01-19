import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import "./Art.css";
import Saco from "./img/image 1.png";
import Jean from "./img/image 2.png";
import Trash from "./img/trash.svg";

export default function Art() {
  // Creo los estados a utilizar
  const [cant_art_1, setCantArt1] = useState(0);
  const [cant_art_2, setCantArt2] = useState(0);
  const { cant_total, setCantTotal } = useContext(AppContext);
  const { precio_total, setPrecioTotal } = useContext(AppContext);

  // Actualizo los totales del cart cada vez que se actualizan las cantidades de los artículos
  useEffect(() => {
    setCantTotal(cant_art_1 + cant_art_2);
    setPrecioTotal(cant_art_1 * 7421 + cant_art_2 * 7421);
  });

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
          <div className="col-1 talles">
            <div className="d-flex">
              <p className="talle">44</p>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex cantidadesButtons">
              {/* // Resto 1 en el artículo 1 */}
              <button
                onClick={() => {
                  if (cant_art_1 > 0) {
                    setCantArt1(cant_art_1 - 1);
                  }
                }}
              >
                -
              </button>
              <p className="cantidad">{cant_art_1}</p>

              {/* // Sumo 1 en el artículo 1 */}
              <button onClick={() => setCantArt1(cant_art_1 + 1)}>+</button>
            </div>
          </div>
          <div className="col-3">
            <p className="precio">
              <del> $9.895 </del> <span>$7.421</span>
            </p>
          </div>
          <div className="col-1 borrar">
            <button onClick={() => setCantArt1(0)}>
              <img src={Trash} alt="" className="trash" />
            </button>
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
          <div className="col-1 talles">
            <div className="d-flex">
              <p className="talle">44</p>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex cantidadesButtons">
              {/* // Resto 1 en el artículo 2 */}
              <button
                onClick={() => {
                  if (cant_art_2 > 0) {
                    setCantArt2(cant_art_2 - 1);
                  }
                }}
              >
                -
              </button>
              <p className="cantidad">{cant_art_2}</p>

              {/* // Sumo 1 en el artículo 1 */}
              <button onClick={() => setCantArt2(cant_art_2 + 1)}>+</button>
            </div>
          </div>
          <div className="col-3">
            <p className="precio">$7.421</p>
          </div>
          <div className="col-1 borrar">
            <button onClick={() => setCantArt2(0)}>
              <img src={Trash} alt="" className="trash" />
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
