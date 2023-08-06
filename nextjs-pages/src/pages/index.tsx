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

  let navList = data.data;

  return (
    <main >
      <Navbar navbar={navList.navbar} />
      <Header />
      <Section css={cssBackground.section1} name="MASAŻE TWARZY" description="OPRACOWANE NA PODSTAWIE ORYGINALNYCH TECHNIK DR. SHOGO MOCHIZUKI KOBIDOTOKYO JAPAN" label="azjatycka pielęgnacja" title="JAPONSKI MASAZ TWARZY +" />
      <Section css={cssBackground.section2} name="MASAZE KLASYCZNE" />
      <Section css={cssBackground.section3} />
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
  }`
  //get data with SANITY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const navbar = await client.fetch(queryNavbar
  )
  const home = await client.fetch(query
  )
  const imgFetch = await client.fetch(img)

  return {
    props: {
      data: {
        'navbar': navbar,
        'home': home,
        'imgUlr': imgFetch
      }
    }
  }
}


