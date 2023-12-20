export const OrderForm = ({
  formData,
  formErrors,
  handleOrder,
  handleOnChange,
}) => {
  return (
    <form onSubmit={handleOrder}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Ingresar nombre
        </label>
        <input
          type="text"
          className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
          id="name"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
        />
        {formErrors.name && (
          <div className="invalid-feedback">{formErrors.name}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Ingresar teléfono
        </label>
        <input
          type="text"
          className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleOnChange}
        />
        {formErrors.phone && (
          <div className="invalid-feedback">{formErrors.phone}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Ingresar correo electrónico
        </label>
        <input
          type="text"
          className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        {formErrors.email && (
          <div className="invalid-feedback">{formErrors.email}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="confirmEmail" className="form-label">
          Confirmar correo electrónico
        </label>
        <input
          type="text"
          className={`form-control ${
            formErrors.confirmEmail ? "is-invalid" : ""
          }`}
          id="confirmEmail"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleOnChange}
        />
        {formErrors.confirmEmail && (
          <div className="invalid-feedback">{formErrors.confirmEmail}</div>
        )}
      </div>

      <button type="submit" className="btn btn-outline-primary">
        Terminar Compra
      </button>
    </form>
  );
};
