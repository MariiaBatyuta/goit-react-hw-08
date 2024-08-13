import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts, selectLoading } from "../../redux/contacts/selectors";
import css from "./Contacts.module.css";
import Loader from "../../components/Loader/Loader";

export default function Contacts() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <ContactForm />
            <SearchBox />
            <div className={css.titleContainer}>
                {contacts.length > 0 && <h3 className={css.title}>Your contacts</h3>}
                {loading && <Loader />}
            </div>
            <ContactList />
        </div>
    )
}