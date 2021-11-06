import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTotal } from "../store/basket";
import Purchases from "./Purchases";
import Order from "./Order.jsx";
import Personal from "./Personal";
import Congrats from "./Congrats";
import createOrder from "./order.js";

const EMPTY = Symbol();
const PURCHASES = Symbol();
const ORDER = Symbol();
const CONGRATS = Symbol();

export default function () {
  const [stage, setStage] = useState(PURCHASES);
  const basket = useSelector((state) => state.basket.items);
  const empty = <h2>Košarica je prazna</h2>;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!basket.length) return setStage(EMPTY);
    setTotal(getTotal(basket));
  });

  switch (stage) {
    case EMPTY:
      return empty;
    case ORDER:
      return (
        <>
          <h2>Ispunite osobne podatke za narudžbu</h2>
          <Order basket={basket} total={total} />
          <Personal />
          <div className="basket-footer">
            <button
              className="btn btn-primary"
              onClick={async () =>
                (await createOrder(basket, total)) && setStage(CONGRATS)
              }
            >
              Prihvati
            </button>
          </div>
        </>
      );
    case CONGRATS:
      return (
        <>
          <Congrats />
          <Order />
        </>
      );
  }
  return basket.length ? (
    <>
      <h2>Vaša kupovina</h2>
      <Purchases />
      <div className="basket-footer">
        <button className="btn btn-primary" onClick={() => setStage(ORDER)}>
          Naruči
        </button>
      </div>
      <br />
    </>
  ) : (
    empty
  );
}
