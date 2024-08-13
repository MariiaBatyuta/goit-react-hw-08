import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import css from './EditModal.module.css'; // Import your CSS module

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

            {open && (
                <div className={css.dialogOverlay} onClick={handleClose}>
                    <div className={css.dialog} onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleSubmit} className={css.form}>
                            <h2 className={css.dialogTitle}>Edit contact information</h2>
                            <div className={css.dialogContent}>
                                <label htmlFor="name" className={css.label}>Name</label>
                                <input autoFocus required id="name" type="text" className={css.input} value={name} onChange={(e) => setName(e.target.value)}/>
                                <label htmlFor="number" className={css.label}>Number</label>
                                <input required id="number" type="text" className={css.input} value={number} onChange={handleNumberChange} />
                            </div>
                            <div className={css.dialogActions}>
                                <button type="button" onClick={handleClose}>Cancel</button>
                                <button type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};