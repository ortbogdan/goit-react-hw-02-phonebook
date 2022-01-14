import React from 'react';
import { Button } from '../..';
import { ContactItem } from './Contact.styled';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      {name}:<span>{number}</span>
      <Button contactId={id} onDeleteContact={onDeleteContact}>
        Delete
      </Button>
    </ContactItem>
  );
};
