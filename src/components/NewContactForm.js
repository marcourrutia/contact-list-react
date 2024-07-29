import "./NewContactForm.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/context";

export const NewContactForm = (props) => {
  const state = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const contact = state.store.contact.find((c) => c.id === parseInt(id));
      if (contact) {
        setData({
          name: contact.name,
          phone: contact.phone,
          email: contact.email,
          address: contact.address,
        });
      }
    }
  }, [id, state.store.contact]);

  const url = id
    ? `https://playground.4geeks.com/contact/agendas/contactMarco/contacts/${id}`
    : "https://playground.4geeks.com/contact/agendas/contactMarco/contacts";

  const method = id ? "PUT" : "POST";
  const title = id ? "Edit Contact" : "New Contact"

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

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
      state.actions.customFetch(url, method, data, (response) => {
        setData({
          name: "",
          phone: "",
          email: "",
          address: "",
        });
        alert(method === "POST" ? "Contacto agregado" : "Contacto actualizado");
        navigate("/");
      });
    }
  };
  return (
    <div className="formContainer">
      <h1 className="formTitle">{title}</h1>
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
            <button className="formButton">Back</button>
          </Link>
          <button className="formButton" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
