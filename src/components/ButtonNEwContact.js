import { Link } from "react-router-dom";
import './ButtonNewContact.css';

export const ButtonNewContact = () => {
    return (
        <Link to={'/new-contact'}><button className="btnNewContact">Add new contact</button></Link>        
    );
}