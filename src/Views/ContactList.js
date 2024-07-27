import { Contact } from "../components/Contact";
import { ButtonNewContact } from "../components/ButtonNEwContact";
import "./ContactList.css";

/* const getList = () => {
  fetch("https://playground.4geeks.com/todo/users/devMarco", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setList(data.todos))
    .catch((error) => alert(error));
};
useEffect(() => {
  getList();
}, []); */

export const ContactList = () => {
  return (
    <div>
      <section className="btnView">
        <ButtonNewContact />
      </section>
      <section className="listView">
        <Contact />
        <Contact />
        <Contact />
      </section>
    </div>
  );
};
