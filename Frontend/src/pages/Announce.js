import React from 'react'
import Header from '../components/Header'
import PostAnnounce from '../components/PostAnnounce'

const Announce = () => {
  return (
    <section className='announce'>
        <Header />

        <main>
          <PostAnnounce />
        </main>
    </section>
  )
}

export default Announce