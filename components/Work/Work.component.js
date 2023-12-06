import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Work.module.scss';
import Typewriter from 'typewriter-effect';
import Form from '../Form/Form.component';

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
            <p className={clsx(styles.work)}>Web Developer</p>
            <a
              className={clsx(styles.btn, styles.btn1)}
              href="/images/ramonResume.pdf"
              download="resume.pdf"
            >
              Resume
            </a>
          </div>
        </div>
        <Form />
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
