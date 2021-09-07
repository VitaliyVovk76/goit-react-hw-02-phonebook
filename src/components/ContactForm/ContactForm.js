import React, { Component } from "react";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = { name: "", number: "" };
  //записывает в this.state значения поля формы
  hendleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  //передает в Аpp значения полей формы
  hendleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onFormSubmit({ name, number });
    this.reset();
  };
  //очистка формы
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={s.contactForm} onSubmit={this.hendleSubmit}>
        <label className={s.formLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.hendleChange}
          />
        </label>
        <label className={s.formLabel}>
          <span>Number</span>
          <input
            className={s.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.hendleChange}
          />
        </label>

        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
