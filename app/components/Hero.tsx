import Link from "next/link"
import { urlFor } from '@/sanity/lib/image'
import Image from "next/image"

const Hero = ({data}:{data:Blog}) => {
    return (
      
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-4">
      <Image
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={urlFor(data.image).url()}
        alt="blog"
        width={200}
        height={200}
      />
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        {data.Title}
      </h1>
      <p className="leading-relaxed mb-3">
        {data.paragraph}
      </p>
      <div className="flex items-center flex-wrap">
        <Link href={`blog/${data.slug}`} className="text-indigo-500 inline-flex items-center">
          Learn More
        </Link>
      </div>
    </div>


    )
  }
  
  export default Hero