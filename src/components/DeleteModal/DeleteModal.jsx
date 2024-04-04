import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineDelete } from "react-icons/ai";

export default function DeleteModal({ dataId }) {
    const dispatch = useDispatch()
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
                <AiOutlineDelete color='black' size={12}/>
            </button>
        
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" >
                {"Are you sure, you want to delete this contact?"}
                </DialogTitle>
                <DialogActions>
                    <button type="button" onClick={handleClose}>Disagree</button>
                    <button type="button" onClick={handleDelete} autoFocus>Agree</button>
                </DialogActions>
            </Dialog>
        </>
    );
}