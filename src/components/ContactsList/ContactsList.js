import React from "react";
import shortid from "shortid";
import s from "./ContactsList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={s.contactsWrapper}>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={shortid.generate()}>
          <span>{name}: </span>
          <span>{number}</span>
          <button
            className={s.contactButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
export default ContactList;
