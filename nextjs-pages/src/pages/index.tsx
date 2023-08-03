import { createClient } from "next-sanity";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function Home(data: any) {

  let navList = data.data;
  console.log(navList.home.length)
  console.log(navList.home)




  console.log(navList.length)

  return (
    <main >
      <Navbar navbar={navList.navbar} />

      <ol>
        {data && navList.home.map((item: any, index: any) => {
          return (
            <li key={index}>{item.name}</li>
          )
        })}
      </ol>
    </main>
  )
}

export async function getStaticProps(context: any) {
  const client = createClient({
    projectId: 'ndx3tzb1',
    dataset: 'production',
    useCdn: true
  });
  const query = `*[_type == "pet"]`;

  const queryNavbar = `*[_type == "navbar"]`;

  //get data with SANITY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const navbar = await client.fetch(queryNavbar
  )
  const home = await client.fetch(query
  )



  return {
    props: {
      data: {
        'navbar': navbar,
        'home': home
      }

    }
  }
}


