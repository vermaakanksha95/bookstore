import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' bg-slate-700 flex flex-1 py-4 px-[10%] justify-between'>
        <a href="" className='text-white  text-2xl'>Book Store</a>

        <div className='flex gap-5'>
            <Link href="/" className=' text-white font-semibold'>Home</Link>
            <Link href="" className=' text-white font-semibold'>Login</Link>
            <Link href="" className=' text-white font-semibold'>Register</Link>

        </div>
      
    </div>
  )
}

export default Header
