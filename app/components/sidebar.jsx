import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className=" w-[200PX] h-screen bg-slate-200  ">
    <div className=" flex flex-col gap-3 mt-2">
      <Link
        href="/"
        className=" text-slate-800  px-3 py-2 hover:bg-slate-300  text-center"
      >
        Dashboard
      </Link>
      <Link
        href="/admin/categories"
        className=" text-slate-800  px-3 py-2 hover:bg-slate-300  text-center"
      >
        Manage Categories
      </Link>
      <Link
        href="/admin/books"
        className=" text-slate-800  px-3 py-2 hover:bg-slate-300  text-center"
      >
        Manage Books{" "}
      </Link>
      <Link
        href=""
        className=" text-slate-800  px-3 py-2 hover:bg-slate-300  text-center"
      >
        Insert Books
      </Link>
      <Link
        href=""
        className=" text-slate-800  px-3 py-2 hover:bg-slate-300  text-center"
      >
        Manage Orders
      </Link>
      <Link
        href=""
        className=" text-slate-800  px-3 py-2 hover:bg-slate-300  text-center"
      >
        Manage Payments
      </Link>
      <Link
        href=""
        className=" text-slate-800  px-3 py-2 hover:bg-slate-300  text-center"
      >
        Settings
      </Link>
    </div>
    </div>
  )
}

export default Sidebar
