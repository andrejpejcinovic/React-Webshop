export default function () {
  return (
    <>
      <h3>Molimo ispunite vaše podatke</h3>
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-3">
              <label>Ime:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="firstName" />
            </div>
            <div className="col-3">
              <label>Prezime:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="lastName" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-3">
              <label>Ulica:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="street" />
            </div>
            <div className="col-3">
              <label>Broj:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="number" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-3">
              <label>Poštanski broj:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="postalCode" />
            </div>
            <div className="col-3">
              <label>Grad:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="city" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-3">
              <label>Telefon:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="telephone" />
            </div>
            <div className="col-3">
              <label>E-mail:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="email" />
            </div>
            <br />
            <br />

            <div className="col-3">
              <label>Broj kartice:</label>
            </div>
            <div className="col-3">
              <input className="form-control" name="card" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
