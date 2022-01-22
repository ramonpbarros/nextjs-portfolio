import clsx from 'clsx';
import { animateScroll as scroll } from 'react-scroll';

export default function ButtoScrollTop() {
  function scrollTop() {
    scroll.scrollToTop();
  }
  return (
    <div className={clsx('btn-scroll-top', '')}>
      <button onClick={scrollTop}>to the top</button>
    </div>
  );
}
