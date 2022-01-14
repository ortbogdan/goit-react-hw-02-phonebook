import React from 'react';
// import PropTypes from "prop-types";

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}:<span>{number}</span>
        </li>
      ))}
    </ul>
  );
};

// ContactsList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired
//     })).isRequired
// }
