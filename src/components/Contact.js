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
        <i className="bi bi-trash3"></i>
      </div>
    </div>
  );
};

/* contactImage="https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png"
        contactName="Juan Perez Bacayaru"
        contactDirection="Los Notros #125, Concepción, Chile"
        contactNumber="+569 58436245"
        contactEmail="juanitoperez@gmail.com" */