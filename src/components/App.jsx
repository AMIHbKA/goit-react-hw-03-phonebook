import { Component } from 'react';
import { ContactForm } from './PhoneBook/ContactForm/ContactForm';
import { ContactsList } from './PhoneBook/ContactsList/ContactsList';
import { Filter } from './PhoneBook/Filter/Filter';
import PropTypes from 'prop-types';
import { Container } from './PhoneBook/UI/Container/Container.styled';
import { TittleStyled } from './PhoneBook/UI/Tittle.styled';

const LS_KEY = 'contacts_list';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveState = localStorage.getItem(LS_KEY);
    if (saveState) {
      this.setState({ contacts: JSON.parse(saveState) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  onAddContact = newContact => {
    this.setState(prevState => {
      const { contacts } = prevState;

      const alredyInContacts = contacts.some(
        ({ name }) => name === newContact.name
      );

      if (alredyInContacts) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }

      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  onFilterChange = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const optimizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(optimizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <Container>
        <TittleStyled>Phonebook</TittleStyled>
        <ContactForm onContactAdd={this.onAddContact} />
        <TittleStyled>Contacts</TittleStyled>
        <Filter value={filter} onFilter={this.onFilterChange} />
        <ContactsList
          contacts={visibleContacts}
          onDelete={this.onDeleteContact}
        />
      </Container>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
