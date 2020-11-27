import ReactMarkdown from "react-markdown";
import styles from '../articulo/id.module.scss'

export default function post({ title, tags, content, avatar }) {
  return (
    <>
      <section className={styles.content_wrapper }>
      <div className={styles.article_wrapper}>
        <div className={styles.cover_img}>
        <img className={styles.crayons_article__cover__image} src={avatar} />
        </div>
      <h1 className={styles.crayons_title}>{title}</h1>
       <div className={styles.spec__tags}>
       <ul className={styles.tags_list}>
          {tags &&
            tags.map((tag, key) => {
              return <li className={styles.tags_item} key={key}># {tag}</li>;
            })}
        </ul>
       </div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
        
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1");
  const json = await data.json();

  // const paths = json.map((path) => `/articulo/${path.id}`)
  const paths = json.map((path) => {
    return `/articulo/${path.id}`;
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await fetch(`https://dev.to/api/articles/${id}`);
  const json = await data.json();

  return {
    props: {
      title: json.title,
      tags: json.tags,
      content: json.body_markdown,
      avatar: json.social_image
    },
    revalidate: 3600,
  };
}
