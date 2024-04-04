import React from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { FaPhone, FaUser } from "react-icons/fa6";
import css from "./Contacts.module.css";
import toast from "react-hot-toast";

export default function Contacts({ contact }) {
  const dispatch = useDispatch();

  const handleEditContact = (updatedContact) => {
    dispatch(editContact(updatedContact)).unwrap()
      .then(() => toast.success("Contact changed successfully!"))
      .catch(() => toast.error("Something went wrong. Try again."));; 
    };

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <div>
          <FaUser />
          <p>{contact.name}</p>
        </div>
        <div>
          <FaPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <div className={css.buttonContainer}>
        <EditModal
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onSubmit={handleEditContact}
        />
        <DeleteModal dataId={contact.id} />
      </div>
    </div>
  );
}
