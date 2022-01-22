import { useEffect } from 'react';

import clsx from 'clsx';
import ButtonScrollTop from '../ButtonScrollTop/ButtonScrollTop.component';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <>
      <section className={clsx('section', 'bg-black')}>
        <div className={styles.div}>
          <div className="reveal fade-left">
            <p className={clsx(styles.h2, styles.contact)}>CONTACT</p>
          </div>
        </div>
        <ButtonScrollTop />
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
