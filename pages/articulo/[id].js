export default function post() {
  return (
    <>
      <p>Soy un post</p>
    </>
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
  return {
    props: {
      title: json.title,
      tags: json.tags,
      content: json.body_html,
    },
  };
}
