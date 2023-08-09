import { createClient } from "next-sanity";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Image from "next/image";
import Section from "@/components/section/Section";

const cssBackground = {
  section1: 'face_massage',
  section2: 'classic_massage',
  section3: 'before_massage'
}

export default function Home(data: any) {

  let dataSanity = data.data;
  const massageData = dataSanity.faceMassage;
  console.log(dataSanity)
  console.log('NavList')
  console.log(massageData)

  return (
    <main >
      <Navbar navbar={dataSanity.navbar} />
      <Header />
      <Section css={cssBackground.section1} name={dataSanity.sectionTitle[0].title} description={dataSanity.sectionTitle[0].description} massageData={massageData} />
      <Section css={cssBackground.section2} name={dataSanity.sectionTitle[1].title} description={dataSanity.sectionTitle[1].description} />
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
  const img = `*[_type == "pet"]{
    "imageUrl": Image.asset->url
  }`;
  const sectionTitle = `*[_type == 'section-title']  | order(_createdAt asc)`;
  const faceMassageQuery = `*[_type == 'faceMassage']`;
  //get data with SANITY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const navbar = await client.fetch(queryNavbar
  )
  const home = await client.fetch(query
  )
  const imgFetch = await client.fetch(img)
  const sectionTitleFetch = await client.fetch(sectionTitle);
  const faceMassageFetch = await client.fetch(faceMassageQuery);

  return {
    props: {
      data: {
        'navbar': navbar,
        'home': home,
        'imgUlr': imgFetch,
        'sectionTitle': sectionTitleFetch,
        'faceMassage': faceMassageFetch
      }
    }
  }
}


