import { Formik, Field } from 'formik';
import React, { Component } from 'react';
import { Section } from './Seaction';
import * as SC from './Phonebook.styled';
import { nanoid } from 'nanoid';
import { ContactForm } from './PhonebookForm';
import { Contacts } from './Contacts';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onDeleteBtnClick = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  HandleChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  SubmitNameForm = ({ name, number }, { resetForm }) => {
    if (this.state.contacts.find(contact => contact.name === name))
      return alert(`${name} is alredy in contacts.`);

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
      name,
      number,
    }));
    resetForm();
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}></Section>
        <ContactForm onSubmit={this.SubmitNameForm} />
        <Section title={'Contacts'}>
          <Contacts
            onChange={this.HandleChangeFilter}
            filter={this.state.filter}
            contacts={this.state.contacts}
            onDeleteBtnClick={this.onDeleteBtnClick}
          />
        </Section>
      </>
    );
  }
}
