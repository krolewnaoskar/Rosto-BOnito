import styles from './../styles/Home.module.scss';
import Navbar from '@/components/navbar/Navbar';
import { createClient } from 'next-sanity';
import PortableText from "react-portable-text";

export default function Home(pet) {
  console.log(pet);
  return (
    <main className={styles.main}>
      <Navbar />

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