
export default function prueba({name, description}){
  return(
    <div>
      <p>Hola, mi nombre en github es : {name} </p>
      <p>{description}</p>
    </div>
  )
}

export async function getStaticProps(){

  const data =  await fetch('https://api.github.com/users/andreslemme')
  const json = await  data.json()

  return{
    props:{
      name: json.name,
      description: json.bio,
    },
    revalidate: 15
  }
}