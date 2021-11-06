export default function Order(props) {
  const { basket, total } = props;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Količina</th>
            <th>Naziv</th>
            <th>Cijena</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((card) => {
            const { id, qnty, name, price } = card;
            return (
              <tr key={id.toString()}>
                <td>{qnty}x</td>
                <td>{name}</td>
                <td>{(price * qnty).toFixed(2)}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="2">
              <b>Ukupno:</b>
            </td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <div className="col-2 d-inline p-2">
        <label>Unesite kupon: </label>
        <br />
        <label>(20OFF / 5OFF / 20EUROFF)</label>
      </div>
      <div className="col-2 ">
        <input className="form-control d-inline p-2" name="Discount" />
        <br />
        <button className="btn btn-primary d-inline p-2" onClick>
          Potvrdi
        </button>
      </div>
    </>
  );
}
