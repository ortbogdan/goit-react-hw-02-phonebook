import React from 'react';

export const Button = ({
  type = 'button',
  children,
  contactId,
  onDeleteContact,
}) => {
  return onDeleteContact ? (
    <button type={type} onClick={() => onDeleteContact(contactId)}>
      {children}
    </button>
  ) : (
    <button type={type}>{children}</button>
  );
};
