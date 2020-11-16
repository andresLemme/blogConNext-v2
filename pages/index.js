import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [theRoute, setTheRoute] = useState()

  function handleChange(e){
    const {value} = e.target;
    setTheRoute(value)
  }
  return (
    <div className={styles.container}>
      <input type="text" onChange={handleChange}/>
      <Link href={`/prueba/${theRoute}`}>
      <a>Ir a prueba/ {theRoute}</a>
        
      </Link>
      
    </div>
  )
}
