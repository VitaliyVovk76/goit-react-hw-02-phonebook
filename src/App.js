import React, { Component } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  //принимает state из ContactForm, делает проверку и записывает его в state App
  hendleFormSbumit = (data) => {
    const { name, number, id } = data;
    if (this.banToAdd(data.name)) {
      alert("hello");
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, { name, number, id }],
    });
  };
  //записывает в this.state.filter значение
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  //фильтрует this.state.contacts
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  //находит одинаковые имена в this.state.contacts
  banToAdd = (searchName) => {
    return this.state.contacts.find(({ name }) => name === searchName);
  };
  //удаляет выбранный контакт
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1 className={s.appTitle}>Phonebook</h1>
        <ContactForm onFormSubmit={this.hendleFormSbumit} contacts={contacts} />

        <h2 className={s.appTitle}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
