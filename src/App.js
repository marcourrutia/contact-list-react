import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactList } from "./Views/ContactList";
import { NewContact } from "./Views/NewContact";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/contactList" element={ <ContactList /> }/>
    <Route path="/newContact" element={ <NewContact /> }/>
  </Routes>
  </BrowserRouter>
}

export default App;
