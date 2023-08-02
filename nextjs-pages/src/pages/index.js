import styles from './../styles/Home.module.scss';
import Navbar from '@/components/navbar/Navbar';
import { createClient } from 'next-sanity';
import PortableText from "react-portable-text";

export default function Home(pet) {
  let name = pet.pet;
  console.log(name.length)
  let img = name.Image;



  console.log(Array.isArray(pet))
  return (
    <main className={styles.main}>
      <Navbar />
      {name.map(item => {
        return <p>{item.name}</p>
      })}
      <img src='' alt="" />
    </main>
  )
}


export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "ndx3tzb1",
    dataset: 'production',
    useCdn: true
  });
  const query = `*[_type == "pet"]`;
  const pet = await client.fetch(query);
  console.log(pet)
  return {
    props: {
      pet
    }
  }
}