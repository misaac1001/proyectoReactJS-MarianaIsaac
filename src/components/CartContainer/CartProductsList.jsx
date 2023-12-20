export const CartProductsList = ({ cartProducts, removeProductId }) => {
  return (
    <>
      {cartProducts.map((product) => (
        <div key={product.id} className="mb-4 border p-3">
          <div className="d-flex align-items-center">
            <img className="w-25 me-3" src={product.img} alt="" />
            <div>
              <h2>Nombre: {product.nombre}</h2>
              <p>Cantidad: {product.cantidad}</p>
              <p>Precio por unidad: $ {product.precio}</p>
              <p>Subtotal: $ {product.subtotal}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeProductId(product.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
