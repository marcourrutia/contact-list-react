import "./Contact.css";

export const Contact = (props) => {
  return (
    <div className="container">
      <div className="contactPicture">
        <img src={props.contactImage} />
      </div>
      <div className="contactInfo">
        <h1 className="contactName">{props.contactName}</h1>
        <div className="boxInfo">
          <i className={props.iconDirection}></i>
          <span>{props.contactDirection}</span>
        </div>
        <div className="boxInfo">
          <i className={props.iconNumber}></i>
          <span>{props.contactNumber}</span>
        </div>
        <div className="boxInfo">
          <i className={props.iconEmail}></i>
          <span>{props.contactEmail}</span>
        </div>
      </div>
      <div className="contactIcons">
        <i className={props.iconEdit}></i>
        <i className={props.iconDelete}></i>
      </div>
    </div>
  );
};
