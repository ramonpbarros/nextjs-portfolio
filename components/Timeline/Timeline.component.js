import clsx from 'clsx';
import styles from './Timeline.module.scss';
import Link from 'next/link';

export default function Form() {
  return (
    <>
      <section className={clsx(styles.timeline)}>
        <div className={clsx(styles.tl_item)}>
          <div className={clsx(styles.tl_kw_bg)}></div>

          <div className={clsx(styles.tl_year)}>
            <p className="">KILLERWHALE</p>
          </div>

          <div className={clsx(styles.tl_content)}>
            <h1>Killer Whale Crypto</h1>
            <p>
              Exciting project I had the pleasure to work on with an amazing
              crew of programmers from Midway Web Development. During this
              project I was able to learn and work with my favorite React
              framework, Next.js.
            </p>
          </div>
        </div>

        <div className={clsx(styles.tl_item)}>
          <div className={clsx(styles.tl_uc_bg)}></div>

          <div className={clsx(styles.tl_year)}>
            <p className="">UCSD</p>
          </div>

          <div className={clsx(styles.tl_content)}>
            <h1 className="">UCSD Extension</h1>
            <p>
              The UCSD extension Full Stack Web-Development Course provided me
              with the opportunity to switch career paths by teaching me all the
              core concepts and skills required to be a Full Stack
              Web-Developer. Here I learned and practiced both front end and
              back end concepts as well as important day to day skills such as
              git version control, how to work remotely and how to manage
              deadlines and teams.
            </p>
          </div>
        </div>

        <div className={clsx(styles.tl_item)}>
          <div className={clsx(styles.tl_ok_bg)}></div>

          <div className={clsx(styles.tl_year)}>
            <p className="">OAKLEY</p>
          </div>

          <div className={clsx(styles.tl_content)}>
            <h1 className="">Oakley AirWave 1.5</h1>
            <p>
              Exciting project built through a company I work for in 2013 called
              Sook Apps. I was an intern back then and worked mostly on the
              Android version. Using my improved Java skills I was responsible
              of building the framework focusing on UI/UX. Since then Oakley has
              partnered up with Recon Instruments and the current version of the
              app is different from the one I worked on.
            </p>
          </div>
        </div>

        <Link href='/godzilla' passHref>
          <div className={clsx(styles.tl_item)}>
            <div className={clsx(styles.tl_gz_bg)}></div>

            <div className={clsx(styles.tl_year)}>
              <p className="">GODZILLA</p>
            </div>

            <div className={clsx(styles.tl_content)}>
              <h1 className="">Godzilla AR Comic-Con</h1>
              <p>
                Amazing project built through a company I worked for in 2013
                called Sook Apps. I was an intern back then and I worked mostly
                on the Android version, learning the basics of Java and a lot of
                XML. I also Improved my photoshop skills and got my feet wet on
                the mobile development environment. *Winner of the Digital
                out-of-home awards*
              </p>
              {/* <a
                target="_blank"
                href="https://www.mjdinteractive.com/portfolio/godzilla-comic-con/"
                rel="noopener noreferrer"
              >
                More info
              </a> */}
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
