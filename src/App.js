import "./App.css";
import injectContext from "./store/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactList } from "./views/ContactList";
import { NewContact } from "./views/NewContact";
import { ModalDelete } from "./components/ModalDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="edit-contact/:id" element={<NewContact />} />
        <Route path="/confirm" element={<ModalDelete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
