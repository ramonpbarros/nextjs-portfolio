import clsx from 'clsx';
import styles from './MouseScroll.module.scss';

export default function MouseScroll() {
  return (
    <div className={clsx(styles.mouse_scroll, 'container')}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <div>
        <span className={clsx(styles.m_scroll_arrows, styles.unu)}></span>
        <span className={clsx(styles.m_scroll_arrows, styles.doi)}></span>
        <span className={clsx(styles.m_scroll_arrows, styles.trei)}></span>
      </div>
    </div>
  );
}
