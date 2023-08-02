import { createClient } from "next-sanity";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function Home(home: any) {
  let test = home;
  console.log(test.home)
  return (
    <main >
      {test.home.map((item: any, index: any) => {
        return <h2 key={index}>{item.name}</h2>
      })}
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
  const home = await client.fetch(query);
  return {
    props:
    {
      home
    }
  }
}


