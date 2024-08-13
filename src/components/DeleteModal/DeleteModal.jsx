import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import { AiOutlineDelete } from "react-icons/ai";
import css from './DeleteModal.module.css';

export default function DeleteModal({ dataId }) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setOpen(false);
        dispatch(deleteContact(dataId)).unwrap()
            .then(() => toast.success("Contact deleted successfully!"))
            .catch(() => toast.error("Something went wrong. Try again."));
    };

    return (
        <>
            <button type="button" onClick={handleClickOpen}>
                <AiOutlineDelete size={12} />
            </button>
        
            {open && (
                <div className={css.dialogOverlay} onClick={handleClose}>
                    <div className={css.dialog}>
                        <h2 className={css.dialogTitle}>Are you sure what you want to delete this contact?</h2>
                        <div className={css.dialogActions}>
                            <button type="button" onClick={handleClose}>Disagree</button>
                            <button type="button" onClick={handleDelete}>Agree</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};