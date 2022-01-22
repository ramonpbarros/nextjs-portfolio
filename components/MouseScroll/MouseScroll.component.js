import clsx from 'clsx';
import styles from './MouseScroll.module.scss';

export default function MouseScroll() {
  return (
    <div className={clsx(styles.mouse_scroll, 'container')}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <div>
        <span className={clsx(styles.m_scroll_arrows, styles.one)}></span>
        <span className={clsx(styles.m_scroll_arrows, styles.two)}></span>
        <span className={clsx(styles.m_scroll_arrows, styles.three)}></span>
      </div>
    </div>
  );
}
