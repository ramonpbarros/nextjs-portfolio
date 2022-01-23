import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Work.module.scss';
import Typewriter from 'typewriter-effect';
import Form from '../Form/Form.component';
// import Resume from '../../public/images/ramon.pdf';

export default function Work() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll('.reveal');

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }

    window.addEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <section className={clsx('section-component')}>
        <div className={styles.div}>
          <div className="reveal fade-left">
            <p className={clsx(styles.h2, styles.work)}>Web Developer</p>
          </div>
        </div>
        <div className={clsx(styles.test, 'reveal', 'fade-left', 'section')}>
          <div className={styles.test2}>
            <div className={styles.stroke}>
              <Typewriter
                options={{
                  strings: [
                    'Passionate about developing apps.',
                    'Building a more intuitive user experience on the web.'
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>
            <Button title="Portfolio" link="/work" />
            <a
              className={clsx(styles.btn, styles.btn1)}
              href="/images/resume.pdf"
              download="resume.pdf"
              // target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
        <section className='section'>
          <Form />
        </section>
        {/* <div className="container form">
          <form
            action="https://formspree.io/ramonpbarros@gmail.com"
            method="POST"
          >
            <div className="form-row">
              <div className="form-group col-sm-6">
                <label htmlFor="inputText">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputText"
                  placeholder="Full name"
                  // style="background-color: #030303;"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="inputEmail4">E-mail</label>
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="name@example.com"
                  // style="background-color: #030303;"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message Me</label>
              <textarea
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter your message"
                // style="background-color: #030303; color: white;"
              ></textarea>
            </div>
            <button type="submit" value="Send" className={clsx(styles.btn, styles.btn1)}>
              Submit
            </button>
          </form>
        </div> */}

        {/* <div className={clsx(styles.test, 'section', 'reveal', 'fade-right')}>
          <Image
            src="/images/work.jpg"
            width="750px"
            height="450"
            alt="image"
            className={styles.test2}
          />
          <div className={styles.overlay}></div>
        </div> */}
      </section>

      <style jsx>{`
        .reveal {
          position: relative;
          opacity: 0;
        }
        .reveal.active {
          opacity: 1;
        }
        .active.fade-left {
          animation: fadeLeft 1s ease-in;
        }
        .active.fade-right {
          animation: fade-right 1s ease-in;
        }
        @keyframes fadeLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-right {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
