import React from 'react'
// import useSWR from 'swr'

// Sections
import Navbar from '../../sections/Navbar/Navbar.component'
import Footer from '../../sections/Footer/Footer.component'

// import { fetchAPI } from '../../lib/api'

// const navLinkFetcher = (url) => fetchAPI(url).then((res) => res)

export default function GlobalLayout({ children }) {
  // const { data, error } = useSWR('/products-v-2-s', navLinkFetcher)

  return (
    <div>
      <Navbar  />
      {children}
      <Footer  />
    </div>
  )
}
