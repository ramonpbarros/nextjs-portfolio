import clsx from 'clsx';
import styles from './Title.module.scss';

export default function Title() {
  return (
    <div className={styles.div}>
      <h2 className={clsx(styles.h2, styles.rotate, styles.ramon)}>RAMON</h2>
      <h2 className={clsx(styles.h2, styles.barros)}>BARROS</h2>
    </div>
  );
}
