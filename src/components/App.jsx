import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactList';
import Filter from './Filter/Filter';

import { AppContainer, ContactsTitle, PhonebookTitle } from './App.styled';

export default function App() {
  return (
    <AppContainer>
      <ToastContainer autoClose={2000} position="top-right" />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </AppContainer>
  );
}
