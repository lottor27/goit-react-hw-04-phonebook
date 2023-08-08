import React from "react";
import { useState, useEffect } from "react";
import Form from "./Phonebook/PhonebookForm";
import PhoneBookList from "./PhonebookList/PhoneBookList";
import { nanoid } from 'nanoid'
import Filter from "./Filter/Filter";
import Notiflix from 'notiflix';
import { saveToLocalStorage, loadContacts } from "./hooks/useLocalStorage";



function App () {
 
const [contacts, setContacts] = useState([]);
const [filter, setFilter] = useState('')



useEffect(() => {
  const savedContacts = loadContacts('contacts');
  if (savedContacts && savedContacts.length > 0) {
    setContacts(savedContacts);
  }
}, []);


useEffect(() => {
  saveToLocalStorage('contacts', contacts);
}, [contacts]);



const addContact = (name, number) => {
    
   const idCont = nanoid()
   const arrayinfo = { name: name, number: number, id: idCont };
   const checkName  = contacts.find(contact => contact.name === arrayinfo.name);
   const checkNumbers   = contacts.find(contact => contact.number === arrayinfo.number);
   if (checkName && checkNumbers) {
    Notiflix.Report.failure( 
      `${name} and ${number} is already in contacts`);
    return
  } else if (checkName) {
    Notiflix.Report.failure( 
      `${name} is already in contacts`);
    return
  } else if (checkNumbers){
    Notiflix.Report.failure( 
      `${number} is already in contacts`);
    return
  }
   
   setContacts(prevContacts => [...prevContacts, arrayinfo])

 };


const  deleteContact = contactId => 
  setContacts(prevContacts =>{ 
    return  prevContacts.filter(contact => contact.id !== contactId)},
  )



 const changeFilter = e => {
  const searchValue = e.currentTarget.value
    setFilter(searchValue)
  };




const getVisibleContacts = () => {
  
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
  
};
  

  return (
    <div> 
    <h2>Phonebook</h2>

    <Form addContact={addContact}></Form>
    
    <Filter value={filter} onChange={changeFilter} />

    <h2>Contacts</h2>
    
    <PhoneBookList 
    contacts={contacts} 
    visibleContacts={getVisibleContacts()} onDeleteContacts={deleteContact} />
</div>
  );
}

export default App