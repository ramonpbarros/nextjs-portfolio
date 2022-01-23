import clsx from 'clsx';
import styles from './Form.module.scss';
import { useForm, ValidationError } from '@formspree/react';

import { FaPaperPlane } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Form() {
  const [state, handleSubmit] = useForm('mayvqkwn');
  if (state.succeeded) {
    return <p className={styles.confirmation}>Your Message was sent! &#128640;<br/>I&#39;ll get back to you as soon as possible.<br/>Thank you!</p>;
  }

  return (
    <section className="contact">
      <h1 className={styles.section_header}>Let&#39;s Talk</h1>

      <div className={styles.contact_wrapper}>
        {/* Left contact page */}

        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <div className={styles.col_12}>
              <input
                type="text"
                name="name"
                className={styles.form_control}
                id="name"
                placeholder="Full Name"
                // value=""
                // onChange={''}
                required
                style={{ backgroundColor: 'black', borderColor: 'white' }}
              />
            </div>
          </div>

          <div className={styles.form_group}>
            <div className={styles.col_12}>
              <input
                id="email"
                type="email"
                name="email"
                className={styles.form_control}
                placeholder=" Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <textarea
            className={styles.form_control}
            rows="7"
            placeholder=" Message"
            id="message"
            name="message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            className={clsx(styles.btn, styles.btn1, styles.send_button)}
            type="submit"
            disabled={state.submitting}
          >
            SEND
          </button>
        </form>

        {/* Left contact page */}

        <div className={styles.direct_contact_container}>
          <ul className={styles.contact_list}>
            <li className={styles.list_item}>
              <FaMapMarkerAlt />
              <span className={clsx(styles.contact_text, styles.place)}>
                San Diego, CA
              </span>
              {/* <i className="fa fa-map-marker fa-2x"></i> */}
            </li>

            <li className={styles.list_item}>
              <FaPhoneAlt />
              <span className={clsx(styles.contact_text, styles.phone)}>
                <a href="tel:1-619-481-7715" title="Give me a call">
                  (619) 481-7715
                </a>
              </span>
            </li>

            <li className={styles.list_item}>
              <FaEnvelope />

              <span className={clsx(styles.contact_text, styles.gmail)}>
                <a
                  href="mailto: ramonpbarros@gmail.com"
                  title="Send me an email"
                >
                  ramonpbarros@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <hr className={styles.hr} />
          <ul className={styles.social_media_list}>
            <li>
              <a href="#" target="_blank" className={styles.contact_icon}>
                {/* <i className="fa fa-github" aria-hidden="true"></i> */}
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={styles.contact_icon}>
                {/* <i className="fa fa-codepen" aria-hidden="true"></i> */}
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={styles.contact_icon}>
                {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={styles.contact_icon}>
                {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                <FaCodepen />
              </a>
            </li>
          </ul>
          <hr className={styles.hr} />

          <div className={styles.copyright}>
            &copy; ALL OF THE RIGHTS RESERVED
          </div>
        </div>
      </div>
    </section>
  );
}
