import React, { Fragment } from 'react';
import emailjs from '@emailjs/browser';

function Contact (){
  return (
    <Fragment>
        <div className='contact-left-col'>
            <h3>Here's is</h3>
            <h1>My Contacts :</h1>
            <ul className='flex'>
                <li>Name : <span>Mohamed Alkfrawy</span></li>
                <li>E-mail : <span>mohamedalkfrawy.info@gmail.com</span></li>
                <li>Linkedin : <a href='https://linkedin.com/in/mohamed-alkfrawy' target="_blank">Mohamed Alkfrawy</a></li>
                <li>Github :<a href='https://github.com/Mohamed-Alkfrawy' target="_blank">Mohamed Alkfrawy</a> </li>
                <li>Youtube :<a href='https://www.youtube.com/channel/UCyocFFbZNX67jxpzc6e50dQ' target="_blank">Mohamed Alkfrawy - Frontend Developer</a></li>
            </ul>
        </div>
        <div className='contact-right-col'>
            <h3>Here's is</h3>
            <h1>My Contacts :</h1>
        <Form />
        </div>
    </Fragment>
  )
};


function Form (){
  const handleSubmit = (e) => {
    e.preventDefault();    
    emailjs.sendForm('service_st6xlp5' , 'template_citt3z6' , e.target, 'DAnv780_uDtkwAkKP')
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input type="text" name="user_name" placeholder="Name :" required/>
      <input type="email" name="email_from" placeholder="Email :" required/>
      <textarea name="message" placeholder="Message :" required/>
      <button type="submit">Contact Me</button>
    </form>
  );
};

export default Contact
