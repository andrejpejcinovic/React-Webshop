import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  addToBasket,
  removeFromBasket,
  getTotal,
} from "../store/basket";

export default function (props) {
  const { id, image, title, description, price, qnty } = props;
  const item = { id, image, title, description, price, qnty };
  let isNew = false;
  if (!qnty) {
    item.qnty = 1;
    isNew = true;
  }
  const dispatch = useDispatch();

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={image}
          alt=""
          height="200px"
          width="150px"
        />

        <div className="card-body">
          <h4 className="card-title">
            <center>
              <h4>{title}</h4>
            </center>
          </h4>

          <p className="card-text">{description}</p>
          <p className="card-text">
            <b>Cijena:</b> {price}
          </p>
          {!isNew && (
            <p className="card-text">
              <b>Količina</b>: {qnty}
            </p>
          )}
        </div>
        <div className="card-footer">
          {isNew ? (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToBasket(item))}
            >
              Kupi
            </button>
          ) : (
            <>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(increaseQuantity(id))}
              >
                +
              </button>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(decreaseQuantity(id))}
              >
                -
              </button>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(removeFromBasket(id))}
              >
                Ukloni
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
