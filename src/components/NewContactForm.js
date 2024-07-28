import "./NewContactForm.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/context";

export const NewContactForm = (props) => {
  const state = useContext(Context);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const postContact = (contact) => {
    fetch(
      "https://playground.4geeks.com/contact/agendas/contactMarco/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      }
    )
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setData({
          name: "",
          phone: "",
          email: "",
          address: "",
        });
        alert("Contacto agregado");
      });
  };

  const isEmpty = (value) => value === "";

  const hasEmptyFields = (obj) => {
    return Object.values(obj).some(isEmpty);
  };

  const handleOnChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (hasEmptyFields(data)) {
      alert("Debe completar todos los datos");
    } else {
      postContact(data);
    }
  };
  return (
    <div className="formContainer">
      <h1 className="formTitle">Nuevo contacto</h1>
      <hr style={{ width: "70%", alignSelf: "center", margin: "20px" }}></hr>
      <form className="form" onSubmit={handleSubmit}>
        <div className="labelInputContain">
          <label for="inputName">Full Name</label>
          <input
            onChange={handleOnChange}
            type="text"
            id="inputName"
            name="name"
            value={data.name}
          />
        </div>
        <div className="labelInputContain">
          <label for="inputEmail">Email</label>
          <input
            onChange={handleOnChange}
            type="email"
            id="inputEmail"
            name="email"
            value={data.email}
          />
        </div>
        <div className="labelInputContain">
          <label for="inputNumber">Phone</label>
          <input
            onChange={handleOnChange}
            type="number"
            id="inputNumber"
            name="phone"
            value={data.phone}
          />
        </div>
        <div className="labelInputContain">
          <label for="inputAddress">Address</label>
          <input
            onChange={handleOnChange}
            type="text"
            id="inputAddress"
            name="address"
            value={data.address}
          />
        </div>
        <div className="containtButtonForm">
          <Link to={props.cancelLink}>
            <button className="formButton">Cancel</button>
          </Link>
          <button className="formButton" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
