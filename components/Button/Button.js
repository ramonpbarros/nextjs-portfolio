import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './Button.module.scss';

export default function Button(props) {
  const router = useRouter();

  function clickHandler() {
    router.push(props.link)
  }

  return (
    <button    
      href="/work"
      type=""
      className={clsx(
        styles.btn,
        styles.btn1,
      )}
      onClick={clickHandler}
    >
      {props.title}
    </button>
  );
}
