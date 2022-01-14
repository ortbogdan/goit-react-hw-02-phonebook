import React from 'react';
import { ContactsList } from '..';

export const Filter = ({ id, children, contacts, onChange }) => {
  console.log(contacts);
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input type="text" id={id} onChange={onChange}></input>
      <ContactsList contacts={contacts}></ContactsList>
    </>
  );
};
