
import React from 'react'
import styles from './styles.scss'
import config from '../../config'

function Home () {
  return (
    <section className={styles.section}>
      <a href={config.server.baseAddress + config.server.twitterAuth}>
        <button>Login with twitter:</button>
      </a>
    </section>
  )
}

export default Home
