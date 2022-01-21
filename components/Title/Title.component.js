import clsx from 'clsx';
import styles from './Title.module.scss';
import MouseScroll from '../MouseScroll/MouseScroll.component';

export default function Title() {
  return (
    <>
      <div className={styles.div}>
        <p className={clsx(styles.h2, styles.rotate, styles.ramon)}>RAMON</p>
        <p className={clsx(styles.h2, styles.barros)}>BARROS</p>
      </div>
      <MouseScroll />
    </>
  );
}
