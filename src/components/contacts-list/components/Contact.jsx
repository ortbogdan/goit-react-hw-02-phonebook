import React from 'react';
import { Button } from '../..';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {name}:<span>{number}</span>
      <Button contactId={id} onDeleteContact={onDeleteContact}>
        Delete contact
      </Button>
    </li>
  );
};
