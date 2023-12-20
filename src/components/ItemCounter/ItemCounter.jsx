import { useState } from "react";

export const ItemCounter = ({ initial = 1, stock = 6, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleSumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleRestar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(counter);
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="input-group">
            <span className="input-group-btn">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleRestar}
                disabled={counter === 1}
              >
                -
              </button>
            </span>
            <input
              type="text"
              className="form-control text-center"
              value={counter}
              readOnly
            />
            <span className="input-group-btn">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleSumar}
                disabled={counter === stock}
              >
                +
              </button>
            </span>
          </div>
          <button
            className="btn btn-primary mt-2"
            type="button"
            onClick={handleOnAdd}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};
