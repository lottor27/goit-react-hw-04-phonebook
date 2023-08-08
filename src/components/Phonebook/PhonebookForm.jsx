import { useState } from "react";
import React from "react";
import { nanoid } from 'nanoid'
import css from './Phonebook.module.css'


const Form = ({addContact} ) => {
 const  nameInputId = nanoid();
 const numberInputId = nanoid();

const [name, setName] = useState('')
const [number, setNumber] = useState('')



const handleChange =(event) =>{

const {name, value} = event.currentTarget;
if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
}

const handleSabmit = e => {
    e.preventDefault();
    addContact({name, number});
    reset()
}



const reset =()=>{
    setName('')
    setNumber('')
}

return(
    <form onSubmit={handleSabmit}
    className={css.formbox}>

<label htmlFor={nameInputId}>
Name
<input
className={css.inputPhone}
onChange={handleChange}
value={name}
id={nameInputId}
type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required
/>
</label>
<label htmlFor={numberInputId}>
Number
<input
className={css.inputPhone}
value={number}
onChange={handleChange}
id={numberInputId}
type="tel"
name="number"
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>
</label>
<button type="submit" className={css.btnsubmit}>Add contact</button>

</form>  
  );
}


export default Form
