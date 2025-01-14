import {client} from "@/sanity/lib/client"
import Hero from "./components/Hero";
import Image from "next/image";

export default async function Home() {
 const query = `*[_type == 'blog']| order(_updatedAt asc){
  Title,paragraph,image,"slug":slug.current
}`

const data:Blog[] = await client.fetch(query)
console.log(data)
 return(
  <main>
  <div>
          <Image src="/banner.png" alt="banner" width={900} height={900} className="w-full h-auto mt-4"/>
        </div>
        <h1 className="text-4xl text-center font-bold pt-14">Latest Blogs</h1>
     <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-wrap -m-4">
      {data.map((data: Blog) => (
        <div key={data.slug} className="p-4 md:w-1/3">
          <Hero data={data} />
        </div>
      ))}
     </div>
    </div>
  </main>
 )
}
