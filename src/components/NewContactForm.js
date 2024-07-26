import "./NewContactForm.css";
import { Link } from "react-router-dom";

export const NewContactForm = (props) => {
  return (
    <div className="formContainer">
      <h1 className="formTitle">Nuevo contacto</h1>
      <hr style={{width: "70%", alignSelf: "center", margin: "20px"}}></hr>
      <form className="form">
        <div className="labelInputContain">
          <label for="inputName">Full Name</label>
          <input type="text" id="inputName"></input>
        </div>
        <div className="labelInputContain">
          <label for="inputEmail">Email</label>
          <input type="email" id="inputEmail"></input>
        </div>
        <div className="labelInputContain">
          <label>Phone</label>
          <input></input>
        </div>
        <div className="labelInputContain">
          <label>Address</label>
          <input></input>
        </div>
        <div className="containtButtonForm">
          <Link to={props.cancelLink}><button className="formButton">Cancel</button></Link>          
          <button className="formButton" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};
