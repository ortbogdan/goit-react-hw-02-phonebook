import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '..';
export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        ></Contact>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
