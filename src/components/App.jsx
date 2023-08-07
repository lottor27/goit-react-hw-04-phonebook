import React, { Component } from "react";
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import useLocalStorage from "./hooks/useLocalStorage";
import Notiflix from 'notiflix';



const App = () => {

  const [name, setName] = useLocalStorage('name', '')
  const [number, setNumber] = useLocalStorage('number', '')
  const [id, setId] = useState('')
  // const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState ([name, number, id])


  const handlChange = event => {
    console.log(event.target.name);
    const { name, value } = event.target;

    switch (name){
    case 'name': 
      setName (value)
      break;

      case 'number': 
      setNumber (value)
      break;

      default:
        return;
  }
}
  

const  addContact = ({name, number}) => {

  const checkName = contacts.map(el=>el.name).includes(name)
    const checkNumbers = contacts.map(el=>el.number).includes(number)

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

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };





  return (
    <div> 
  <h2>Phonebook</h2>

  <form 
          >
      
    <label>
    Name
      <input

      onChange={handlChange}
      value={name}
      id={2}
    type="text"
    name="name"
    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
 />
 </label>
 <label >
  Number
 <input
 
 value={number}
 onChange={handlChange}
 id={1}
  type="tel"
  name="number"
  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</label>
 <button type="submit" >Add contact</button>
 
</form>
<label >
    <samp >Find contacts by name</samp> 
    <input
    type="text" 
    />
  </label>
<div>
      
      <ul>
      
      <li 
      key={id}>{name}: {number}
       <button
          type="button"
         
          
        >
          Удалить
        </button></li> 
  
</ul>
</div>  
  </div> )}

export default App
  
