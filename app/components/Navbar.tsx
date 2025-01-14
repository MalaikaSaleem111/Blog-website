import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 bg-black text-white w-full h-20 '>
        <h1 className="text-xl font-bold"><span className='text-teal-500'>V</span>ibrant <span className='text-teal-500'>V</span>ibes</h1>
        <div>
            <ul className="flex items-center gap-8">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar