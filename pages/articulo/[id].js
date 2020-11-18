export default function post({ title, tags, content }) {
  return (
    <section>
      <h1>{title}</h1>
      <ul>
      {tags &&
          tags.map((tag, key) => {
            return <li key={key}>{tag}</li>;
          })}
      </ul>
      <p>{content}</p>
    </section>
  );
}

// export async function getStaticProps({params}){
//   const {id} = params
//   const data = await fetch(`https://dev.to/api/articles/${id}`)
//   const post = await data.json()

//   return{
//     props:{
//       post: post
//     }
//   }
// }

export async function getServersSideProps({ params }) {
  console.log(params);
  const { id } = params;
  const data = await fetch(`https://dev.to/api/articles/${id}`);
  const json = data.json();
  console.log(json.title) 
  return {
    props: {
      title: json.title,
      tags: json.tags,
      content: json.body_html,
    },
  };
}
