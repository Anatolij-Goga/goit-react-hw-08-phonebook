import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import {
  ContactItem,
  ContactName,
  ContactButton,
} from './ContactListItem.styled';

const ContactsListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    await deleteContact(id).unwrap();
    toast.success(`Contact ${name} successfully deleted!`);
  };

  return (
    <ContactItem id={id}>
      <ContactName>
        {name} - {number}
      </ContactName>
      <ContactButton type="submit" onClick={() => handleDeleteContact(id)}>
        Delete
      </ContactButton>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
