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
import Link from 'next/link';

export default function Form() {
  const [state, handleSubmit] = useForm('mayvqkwn');
  if (state.succeeded) {
    return (
      <p className={styles.confirmation}>
        Your Message was sent! &#128640;
        <br />
        I&#39;ll get back to you as soon as possible.
        <br />
        Thank you!
      </p>
    );
  }

  return (
    <section>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.screen}>
            <div className={styles.screen_header}>
              <div className={styles.screen_header_left}>
                <div
                  className={clsx(styles.screen_header_button, styles.close)}
                ></div>
                <div
                  className={clsx(styles.screen_header_button, styles.maximize)}
                ></div>
                <div
                  className={clsx(styles.screen_header_button, styles.minimize)}
                ></div>
              </div>
              <div className={styles.screen_header_right}>
                <div className={styles.screen_header_ellipsis}></div>
                <div className={styles.screen_header_ellipsis}></div>
                <div className={styles.screen_header_ellipsis}></div>
              </div>
            </div>
            <div className={styles.screen_body}>
              <div className={clsx(styles.screen_body_item, styles.left)}>
                <div className={styles.app_title}>
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className={styles.app_location}>
                  <FaMapMarkerAlt /> &nbsp;San Diego, CA
                </div>
                <div className={styles.app_contact}>
                  <FaPhoneAlt /> &nbsp;
                  <a
                    href="tel:1-619-481-7715"
                    title="Give me a call"
                    style={{ color: '#ddd' }}
                    className={styles.contact_link}
                  >
                    +1 (619) 481-7715
                  </a>
                </div>
                <div className={styles.app_email}>
                  <FaEnvelope /> &nbsp;
                  <a
                    href="mailto:ramonpbarros@gmail.com"
                    title="Send me an email"
                    style={{ color: '#ddd' }}
                    className={styles.email_link}
                  >
                    ramonpbarros@gmail.com
                  </a>
                </div>
                <div className={styles.app_social_medias}>
                  <a
                    href="https://www.linkedin.com/in/ramon-barros-095b0b72/"
                    target="_blank"
                    rel="noreferrer"
                    className={clsx(styles.likedin, 'mr')}
                    style={{ color: '#ddd' }}
                  >
                    <FaLinkedinIn />
                  </a>
                  &nbsp;
                  <a
                    href="https://github.com/ramonpbarros"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#ddd' }}
                    className={styles.github}
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className={styles.screen_body_item}>
                <div className={styles.app_form}>
                  <div className={styles.app_form_group}>
                    <input
                      type="text"
                      name="name"
                      className={styles.app_form_control}
                      id="name"
                      placeholder="FULL NAME"
                      required
                      style={{
                        width: '100%',
                        padding: '10px 0',
                        background: 'none',
                        border: 'none',
                        borderBottom: '1px solid #666',
                        color: '#ddd',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color .2s'
                      }}
                    />
                  </div>
                  <div className={styles.app_form_group}>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className={styles.app_form_control}
                      placeholder="EMAIL"
                    />
                  </div>
                  <div className={clsx(styles.app_form_group, styles.message)}>
                    <textarea
                      rows="1"
                      id="message"
                      name="message"
                      className={styles.app_form_control}
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className={clsx(styles.app_form_group, styles.buttons)}>
                    <button className={clsx(styles.btn, styles.btn1)}>
                      SEND
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit} className={styles.topBefore}>
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

        <input
          id="email"
          type="email"
          name="email"
          className={styles.form_control}
          placeholder=" Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

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
      </form> */}
    </section>
  );
}
