import React, { Component } from 'react';
import { Section, ContactsList } from './components/index';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  filterInputId = nanoid();

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, name, number } = this.state;

    const id = nanoid();
    this.setState({ contacts: [{ name, id, number }, ...contacts] });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  findContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return filteredContacts;
  };

  render() {
    const findedContacts = this.findContacts();
    console.log(findedContacts);
    return (
      <>
        <Section title={'Phonebook'}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameInputId}
              onChange={this.handleChange}
            />

            <label htmlFor={this.numberInputId}>Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.numberInputId}
              onChange={this.handleChange}
            />

            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          {/* <Filter id={this.filterInputId} onChange={this.handleChange} contacts={()=>this.findContacts()}>Find contacts by name</Filter>  */}
          <label htmlFor={this.filterInputId}>Find contacts by name</label>
          <input
            type="text"
            name="filter"
            id={this.filterInputId}
            onChange={this.handleChange}
          ></input>
          <ContactsList contacts={findedContacts}></ContactsList>
        </Section>
      </>
    );
  }
}
