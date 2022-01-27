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
            <p className={clsx(styles.work)}>Web Developer</p>
          </div>
        </div>
        <div className={clsx(styles.test, 'reveal', 'fade-right', 'section')}>
          <div className={styles.test2}>
            {/* <div className={styles.stroke}>
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
            </div> */}
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada enim ac risus dignissim, quis efficitur velit tincidunt.
              Donec eget libero fermentum, tincidunt metus non, blandit turpis.
              Sed cursus pellentesque sem id suscipit. Aliquam nunc metus,
              fringilla ut tincidunt at, tincidunt nec mi. Aliquam pharetra
              tellus ac ante rhoncus imperdiet.
            </h5>
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
        <section className="section">
          <Form />
        </section>
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
