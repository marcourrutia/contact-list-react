import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { Contact } from "../components/Contact";
import { ButtonNewContact } from "../components/ButtonNEwContact";
import "./ContactList.css";

export const ContactList = () => {
  const state = useContext(Context);
  useEffect(() => {
    state.actions.getContact();
  }, []);

  const url =
    "https://playground.4geeks.com/contact/agendas/contactMarco/contacts/";

  const handleDelete = (id) => {
    state.actions.customFetch(url + id, "DELETE", null, (response) => {
      alert("Contacto eliminado correctamente");
      state.actions.getContact();
    });
  };
  return (
    <div>
      <section className="btnView">
        <ButtonNewContact />
      </section>
      <section className="listView">
        {state.store.contact.map((item) => (
          <Contact
            key={item.id}
            contactId={item.id}
            contactImage={`https://rickandmortyapi.com/api/character/avatar/${item.id}.jpeg`}
            contactName={item.name}
            contactDirection={item.address}
            contactNumber={item.phone}
            contactEmail={item.email}
            onDelete={handleDelete}
          />
        ))}
      </section>
    </div>
  );
};
