import styles from './MobileMenu.module.scss'
import { navLinks } from '../../data/navLinks'
import { useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function MobileMenu({ shown, toggleShown }) {
  const router = useRouter()
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const handleClickBtn = () => {
    setDropdownVisible(!dropdownVisible)
  }

  function onClickHandler(route) {
    toggleShown()
    router.push(route)
  }

  function filterProducts(filter) {
    return strategies.filter((strat) => strat.type === filter)
  }

  return (
    <>
      {shown && (
        <div className={styles.mobileMenu}>
          {navLinks.map((item, index) => {
            if (item.subLinks) {
              return (
                <div
                  onClick={handleClickBtn}
                  className={styles.dropdownWrapper}
                >
                  <p className={clsx('ff-good', 'text-accent', styles.link)}>
                    <h3>
                      {item.text}
                      <span style={{ marginLeft: '.5rem' }}></span>
                    </h3>
                  </p>
                  {dropdownVisible && (
                    <div className={styles.subLinks}>
                      <ul>
                        {filterProducts('strategy').map((strat) => (
                          <li
                            key={strat.id}
                            className={clsx(
                              'ff-good',
                              'text-accent',
                              styles.link
                            )}
                            onClick={() =>
                              onClickHandler(`/product/${strat.slug}`)
                            }
                          >
                            {strat.name}
                          </li>
                        ))}
                        <li>
                          <h3
                            key={index}
                            className={clsx(
                              'ff-good',
                              'text-accent',
                              styles.view
                            )}
                            fullWidth
                            onClick={() =>
                              onClickHandler('/strategies-signals')
                            }
                          >
                            View All
                          </h3>
                        </li>
                      </ul>
                      <ul>
                        {filterProducts('signal').map((strat) => (
                          <li
                            key={strat.id}
                            className={clsx(
                              'ff-good',
                              'text-accent',
                              styles.link
                            )}
                            onClick={() =>
                              onClickHandler(`/product/${strat.slug}`)
                            }
                          >
                            {strat.name}
                          </li>
                        ))}
                        <li>
                          <h3
                            key={index}
                            className={clsx(
                              'ff-good',
                              'text-accent',
                              styles.view
                            )}
                            fullWidth
                            onClick={() =>
                              onClickHandler('/strategies-signals')
                            }
                          >
                            View All
                          </h3>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )
            } else {
              return (
                <h3
                  key={index}
                  className={clsx('ff-good', 'text-accent', styles.link)}
                  onClick={() => onClickHandler(item.url)}
                >
                  {item.text}
                </h3>
              )
            }
          })}
        </div>
      )}
    </>
  )
}
