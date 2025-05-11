import React from 'react';
import style from '../../Styles/Contact.module.css'
import phone from '../../assets/Images/phone.png'
import email from '../../assets/Images/email.png'
const ContactUs = () => {
  return (
    <>
    <div className={style.contactContainer}>
      <div className={style.contactLeftContainer}>
          <div>
        <div className={style.phoneCall}>
        <img src={phone} alt="phone icon" />
        <h3>Call To Us</h3>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: 08158051119</p>
        </div>
        <hr className={style.contactHr} />
        <div>
        <div className={style.email}>
        <img src={email} alt="email icon" />
        <h3>Write To Us</h3>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@euodia.com </p>
        <p>Emails: support@euodia.com</p>
        </div>
      </div>
      <div className={style.contactRightContainer}>
      <div className={style.contactRightContainerContent}>
        <div>
          <input type="text" placeholder="Your Name" name='name' autoComplete="name" className={style.contactInfoInput} />
        </div>
        <div>
          <input type="email" placeholder="Your Email" name='email' autoComplete="email" className={style.contactInfoInput} />
        </div>
        <div>
          <input type="tel" placeholder="Your Phone" name='tel' autoComplete="tel" className={style.contactInfoInput} />
        </div>
        </div>
        <div className={style.textarea}>
          <textarea
            name="message"
            id="message"
            cols={86}
            rows={10}
            placeholder="Your Message"
            className={style.contactTextarea}
          ></textarea>
        </div>
        <div className={style.sendMessage}>
        <button>Send Message</button>
        </div>
      </div>
    </div>
    </>
  );
};
export default ContactUs;
