import "./ModalDelete.css";

export const ModalDelete = () => {
  return (
    <div className="modal-container">
      <h2 className="modal-h1">¿Quieres eliminar éste contacto?</h2>
      <div className="modal-btn-box">
        <button className="modal-btn">Si</button>
        <button className="modal-btn">No</button>
      </div>
    </div>
  );
};
