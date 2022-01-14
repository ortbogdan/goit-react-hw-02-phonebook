import React from 'react';
import { PageButton } from './Button.styled';

export const Button = ({
  type = 'button',
  children,
  contactId,
  onDeleteContact,
}) => {
  return onDeleteContact ? (
    <PageButton type={type} onClick={() => onDeleteContact(contactId)}>
      {children}
    </PageButton>
  ) : (
    <PageButton type={type}>{children}</PageButton>
  );
};
