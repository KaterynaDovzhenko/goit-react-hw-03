import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBar from "../SearchBar/SearchBar";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedValue = localStorage.getItem("value");
    if (savedValue) {
      return JSON.parse(savedValue);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}></ContactForm>
      <SearchBar value={search} onSearch={setSearch}></SearchBar>
      <ContactList
        contacts={visibleContacts}
        onDelete={deleteContact}
      ></ContactList>
    </>
  );
}
