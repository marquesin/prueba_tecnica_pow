import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./Cart.css";
import Cube from "./img/cube.svg";
import Exchange from "./img/exchange.svg";
import Card from "./img/credit-card.svg";
import Art from "./Art/Art";
export default function Cart() {
  const { precio_total } = useContext(AppContext);

  return (
    <section className="container cart">
      <h3>Carrito</h3>
      <div className="artMob">
        <Art />
      </div>
      <div className="row d-flex justify-content-between condicionesYPay">
        <div className="col-8 colProdu d-flex align-items-start justify-content-between">
          <div className="row d-flex align-items-center">
            <div className="col-4 d-flex align-items-center justify-content-between">
              <img src={Cube} alt="Cubo" />
              <div className="condicionesDeCompra row d-flex align-items-center justify-content-end">
                <h5>ENVÍOS</h5>
                <p>Envíos a todo el país</p>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-between">
              <img src={Exchange} alt="Cambios" />
              <div className="condicionesDeCompra  row d-flex align-items-center justify-content-center">
                <h5>CAMBIOS Y DEVOLUCIONES</h5>
                <p>Es gratis y muy sencillo</p>
              </div>
            </div>
            <div className="col-4 d-flex align-items-start justify-content-between">
              <img src={Card} alt="Tarjeta de crédito" />
              <div className="condicionesDeCompra  row d-flex align-items-center justify-content-center">
                <h5>MEDIOS DE PAGO</h5>
                <p>100% seguros</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 colPay">
          <ul className="row">
            <p className="resumen"> Resumen</p>
            <li className="col desgloseResumen">
              <p>Subtotal</p>
              <p>Envío</p>
              <p>Total</p>
            </li>
            <li className="col desgloseValores">
              <p>$ {precio_total}</p>
              <p>Gratis</p>
              <p>$ {precio_total}</p>
            </li>
          </ul>
          <div className="row d-flex justify-content-center align-items-center finalizarCompra">
            <p>¡Tu envío es gratis!</p>
            <button className="completarCompra">Completar compra</button>
            <button className="seguirComprando">Seguir comprando</button>
          </div>
        </div>
      </div>
      <div className="artDesk">
        <Art />
      </div>
    </section>
  );
}
