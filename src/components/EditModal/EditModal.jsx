import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CiEdit } from "react-icons/ci";

export default function EditModal({ id, name: initialName, number: initialNumber, onSubmit }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(initialName);
    const [number, setNumber] = useState(initialNumber);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id, name, number });
        handleClose();
    };

    const validateNumber = (inputValue) => {
        const number = inputValue.replace(/\D/g, '');
        let validatedNumber = number.slice(0, 3);
        if (number.length > 3) validatedNumber += '-' + number.slice(3, 6);
        if (number.length > 6) validatedNumber += '-' + number.slice(6, 10);
        return validatedNumber;
    };

    const handleNumberChange = (e) => {
        const inputValue = e.target.value;
        const validatedNumber = validateNumber(inputValue);
        setNumber(validatedNumber);
    };

    return (
        <>
            <button type="button" onClick={handleClickOpen}>
                <CiEdit color='black' size={12} />
            </button>
            
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Edit contact information</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="number"
                            label="Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={number}
                            onChange={handleNumberChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <button type="button" onClick={handleClose}>Cancel</button>
                        <button type="submit">Save</button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
