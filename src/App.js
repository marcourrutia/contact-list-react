import "./App.css";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Contact
        contactImage="https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png"
        contactName="Juan Perez Bacayaru"
        iconDirection="bi bi-geo-alt"
        iconNumber="bi bi-telephone"
        iconEmail="bi bi-envelope"
        contactDirection="Los Notros #125, Concepción, Chile"
        contactNumber="+569 58436245"
        contactEmail="juanitoperez@gmail.com"
        iconEdit="bi bi-pencil"
        iconDelete="bi bi-trash3"
      />
    </div>
  );
}

export default App;
