import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" flex flex-1 gap-5">
        <div className=" w-2/12 h-screen bg-slate-200">
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
              Manage Books
            </Link>
            <Link
              href="/admin/books/insert"
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

        <div className="w-10/12">
          <div className="flex flex-1 p-5 flex-col gap-5">
            <div className="flex flex-1 flex-col gap-5">
              <h2 className=" border-l-4 border-orange-600 pl-2 text-xl">
                Admin
              </h2>
            </div>
            <div className=" grid grid-cols-4 gap-3">
              <div className=" flex flex-col items-center justify-center bg-red-200  px-12 py-6  rounded-xl">
                <h1 className="mb-2 text-3xl font-semibold">10+</h1>
                <h1 className="text-gray-500">Categories</h1>
              </div>
              <div className=" flex flex-col items-center justify-center bg-green-200  px-12 py-6  rounded-xl">
                <h1 className="mb-2 text-3xl font-semibold">10+</h1>
                <h1 className="text-gray-500">Orders</h1>
              </div>
              <div className=" flex flex-col items-center justify-center bg-violet-200  px-12 py-6  rounded-xl">
                <h1 className="mb-2 text-3xl font-semibold">10+</h1>
                <h1 className="text-gray-500">Developers</h1>
              </div>
              <div className=" flex flex-col items-center justify-center bg-indigo-200  px-12 py-6 rounded-xl">
                <h1 className="mb-2 text-3xl font-semibold">10+</h1>
                <h1 className="text-gray-500">Developers</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
