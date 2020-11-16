import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <input/>
      <Link href='prueba/cursada'>Ir a la home</Link>
      
    </div>
  )
}
