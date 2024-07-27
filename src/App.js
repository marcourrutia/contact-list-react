import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactList } from "./views/ContactList";
import { NewContact } from "./views/NewContact";
import injectContext from "./store/context";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={ <ContactList /> }/>
    <Route path="/newContact" element={ <NewContact /> }/>
  </Routes>
  </BrowserRouter>
}

export default injectContext(App);
