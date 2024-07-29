import "./Contact.css";

export const Contact = (props) => {
  const handleDeleteClick = () => {
    props.onDelete(props.contactId)
  }

  return (
    <div className="container">
      <div className="contactPicture">
        <img src={props.contactImage} />
      </div>
      <div className="contactInfo">
        <h1 className="contactName">{props.contactName}</h1>
        <div className="boxInfo">
          <i className="bi bi-geo-alt"></i>
          <span>{props.contactDirection}</span>
        </div>
        <div className="boxInfo">
          <i className="bi bi-telephone"></i>
          <span>{props.contactNumber}</span>
        </div>
        <div className="boxInfo">
          <i className="bi bi-envelope"></i>
          <span>{props.contactEmail}</span>
        </div>
      </div>
      <div className="contactIcons">
        <i className="bi bi-pencil"></i>
        <i className="bi bi-trash3" onClick={handleDeleteClick}></i>
      </div>
    </div>
  );
};