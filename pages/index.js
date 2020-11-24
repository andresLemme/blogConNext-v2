import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.postsContainer}>
        {posts.map((post, key) => {
          return (
            <div className={styles.postContainer}>
              <Link href={`/articulo/${post.id}`}>
                <a key={key}>
                  <div className={styles.crayons_story__top}>
                    <div className={styles.crayons_story__meta}>
                      <div className={styles.crayons_story__author_pic}>
                      <img className={styles.crayons_avatar} src={post.user.profile_image_90} />
                      </div>
                      <p>{post.user.name}</p>
                      <p>{post.readable_publish_date}</p>
                    </div>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p>{post.public_reactions_count} Reactions</p>
                  <p>{post.comments_count} Comments</p>
                </a>
              </Link>
            </div>
          );
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
      posts: json,
    },
    revalidate: 3600,
  };
}
