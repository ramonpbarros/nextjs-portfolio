import { useEffect } from 'react';

import clsx from 'clsx';
import styles from './About.module.scss';

export default function About() {
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
      <section className="section">
        <div className={styles.div}>
          <div className="reveal fade-left">
            <p className={clsx(styles.h2, styles.about)}>ABOUT</p>
          </div>
        </div>
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
      `}</style>
    </>
  );
}
