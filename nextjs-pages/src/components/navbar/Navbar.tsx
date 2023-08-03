import { createClient } from "next-sanity";

const Navbar = (navbar: any) => {
    console.log('test navbar')
    console.log(navbar)
    return (
        <nav></nav>
    )
}

export async function getStaticProps(context: any) {
    const client = createClient({
        projectId: 'ndx3tzb1',
        dataset: 'production',
        useCdn: true
    });

    const query = `*[_type == "navbar"]`;
    //get data with SANITY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const navbar = await client.fetch(query)
    console.log(navbar)


    return {
        props:
        {

            navbar
        }
    }
}
export default Navbar