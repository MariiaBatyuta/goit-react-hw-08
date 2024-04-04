import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectVisibleContact = createSelector([selectContacts, selectFilter], (contacts, textFilter) => {
  

  return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase()) || contact.number.replace(/-/g, '').includes(textFilter)
    );
  }
)
