/* eslint-disable no-unused-vars */
import React from 'react';
import './Contact.css';
import Pyramid from '../../ui/Pyramid';
import { contactInfo } from '../../data';
import SocialHandles from '../../ui/SocialHandles';
import { BsFillSendFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8db6a3c9-c292-454f-9357-211a4abe4652");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success"
      });
    }
  };
  return (
    <section id='contact'>
     <div className='section__wrapper'>
      <div className='pyramid__container'>
        <Pyramid/>
      </div>
      <div className='contact__group'>
        <div>
          <h3 className='title'>
            Lets talk on your <span className='shine'>great project</span>{" "}together
          </h3>
          <div className='flex contact__options'>
             {contactInfo.map((contact,index)=>(
              <article className='flex option' key={index}>
                <div className='contact__icon'>
                  <img src={contact.icon} alt='contact__icon'/>
                </div>
                <div className='flex contact__content'>
                  <div>
                    <h3 className='name'>{contact.name}</h3>
                    <p className='text__muted line__clamp__1 value'>{contact.value}</p>
                  </div>
                  <a href={contact.link} target='_blank' className='flex__center btn'>
                    <span className='btn__shine text'>Message</span>
                    <div className='flex__center icon' 
                     style={{background: contact.color}}
                     >
                      {contact.btnIcon}
                    </div>
                  </a>
                </div>
              </article>
             ))}
          </div>
          <SocialHandles/>
        </div>
        <form onSubmit={onSubmit}>
          <input type='text' placeholder='Your Full Name' name='name' required/>
          <input type='email' placeholder='Your Email' name='email' required/>
          <textarea name='message' rows={7} placeholder='Your Message'></textarea>
          <button type='submit' className='btn flex__center submit__btn'>
            <div className='icon'><BsFillSendFill/></div>
            <span>Send Now</span>
          </button>
        </form>
      </div>
     </div>
    </section>
  )
}

export default Contact