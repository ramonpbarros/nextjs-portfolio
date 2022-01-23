import clsx from 'clsx';
import styles from './Form.module.scss';
import { FaPaperPlane } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Form() {
  return (
    <section className="contact">
      <h1 className={styles.section_header}>Contact</h1>

      <div className={styles.contact_wrapper}>
        {/* Left contact page */}

        <form className={styles.form_horizontal} role="form">
          <div className={styles.form_group}>
            <div className={styles.col_12}>
              <input
                type="text"
                className={styles.form_control}
                id="name"
                placeholder="NAME"
                name="name"
                value=""
                onChange={''}
                required
              />
            </div>
          </div>

          <div className={styles.form_group}>
            <div className={styles.col_12}>
              <input
                type="email"
                className={styles.form_control}
                id="email"
                placeholder="EMAIL"
                name="email"
                value=""
                required
              />
            </div>
          </div>

          <textarea
            className={styles.form_control}
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button
            className={clsx(styles.btn, styles.btn_primary, styles.send_button)}
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className={styles.alt_send_button}>
              {/* <i className="fa fa-paper-plane"></i> */}
              <FaPaperPlane />
              <span className={styles.send_text}>SEND</span>
            </div>
          </button>
        </form>

        {/* Left contact page */}

        <div className={styles.direct_contact_container}>
          <ul className={styles.contact_list}>
            <li className={styles.list_item}>
              <FaMapMarkerAlt />
              <span className={clsx(styles.contact_text, styles.place)}>
                City, State
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
                <a href="mailto: ramonpbarros@gmail.com" title="Send me an email">
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
