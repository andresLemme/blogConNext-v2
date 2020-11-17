import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <section className={styles.postsContainer}>

    {posts.map((post, key) =>{
      return(
        <Link href={`/articulo/${post.id}`}>
          <a key={key} >
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </a>
        </Link>
      )
    })}

    </section>
       
      
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1");
  const json = await data.json();
  
  return {
    props: {
      posts: json
    },
    revalidate: 3600,
  };
}
