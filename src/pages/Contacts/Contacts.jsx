import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import { PuffLoader } from "react-spinners";
import css from "./Contacts.module.css";

export default function Contacts() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <ContactForm />
            <SearchBox />
            <h3 className={css.title}>Your contacts</h3>
            {loading && <PuffLoader size={40}/>}
            <ContactList />
        </div>
    )
}