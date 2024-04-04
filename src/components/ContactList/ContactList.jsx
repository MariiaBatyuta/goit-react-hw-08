import { useSelector } from "react-redux";
import Contacts from "../Contacts/Contacts";
import css from "./ContactList.module.css";
import { selectVisibleContact } from "../../redux/contacts/selectors";

export default function ContactList () {
    const contacts = useSelector(selectVisibleContact);
    
    return (
        <div>
            <ul className={css.contactsContainer}>
                {contacts.length > 0 && contacts.map((contact) => (
                    <li key={contact.id} className={css.contactsList}>
                        <Contacts contact={contact} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
