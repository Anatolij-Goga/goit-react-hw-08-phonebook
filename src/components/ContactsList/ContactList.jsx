import { useSelector } from 'react-redux';
import { useGetContactsApiQuery } from 'redux/contactsApi';
import ContactsListItem from 'components/ContactsListItem/ContactListItem';
import { ContactUl, EmptyContactText } from './ContactList.styled';

const ContactList = () => {
  const { data, isLoading } = useGetContactsApiQuery();
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
    );
  };

  const filterElement = filteredContacts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {
        <ContactUl>
          {!isLoading && data && filterElement.length > 0 ? (
            filterElement.map(({ id, name, phone }) => (
              <ContactsListItem key={id} id={id} name={name} number={phone} />
            ))
          ) : (
            <EmptyContactText>No contacts</EmptyContactText>
          )}
        </ContactUl>
      }
    </>
  );
};

export default ContactList;
