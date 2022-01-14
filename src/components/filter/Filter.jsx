import React from 'react';

export const Filter = ({ idGenerator, children, onChange }) => {
  const id = idGenerator();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input type="text" name="filter" id={id} onChange={onChange}></input>
    </>
  );
};
