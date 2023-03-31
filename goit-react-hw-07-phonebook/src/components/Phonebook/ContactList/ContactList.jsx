import styles from './ContactList.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { removeContact } from 'redux/Contacts/Contacts-slice';
//import { getFilteredContacts } from 'redux/Contacts/Contacts-selectors';


      // import css from './ContactsList.module.css';
      // import { toast } from 'react-toastify';
      // import { useDispatch, useSelector } from 'react-redux';
      import { removeContact, fetchContacts } from 'redux/Operation/operations';
      import {
        getFilter,
        getContacts,
        getIsLoading,
        getError,
      } from 'redux/Operation/selectors';
       import { useEffect } from 'react';
      // import Loader from '../Loader/Loader';




const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();


  

  const handleRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const elements = contacts.map(({ name, number, id }) => {
    return (
      <li key={id} className={styles.item}>
        {name}: {number}{' '}
        <span onClick={() => handleRemoveContact(id)} className={styles.remove}>
          delete
        </span>
      </li>
    );
  });

  return (
    <>
      <h4 className={styles.title}>Contacts</h4>
      <ol>{elements}</ol>
    </>
  );
};

export default ContactList;
