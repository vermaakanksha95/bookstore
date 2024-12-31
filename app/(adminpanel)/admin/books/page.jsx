import React from "react";

import ConnectDb from "@/app/db/Connect";
import Book from "@/models/Book";
import Link from "next/link";

const page = async () => {
  ConnectDb();

  let callingBook = await Book.find().populate("category");
  return (
    <div className=" flex gap-3 flex-col ">
      <div className="flex flex-1 justify-between items-center p-5">
        <h1 className="text-xl font-semibold p-3 text-slate-600">
          Manage Books({callingBook.length})
        </h1>
        <Link
          href="/admin/books/insert"
          className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded"
        >
          Add Books
        </Link>
      </div>

      <table className=" border w-full p-5">
        <thead>
          <tr>
            <th className=" border p-2">Id</th>
            <th className=" border p-2">Title</th>
            <th className=" border p-2">Author</th>
            <th className=" border p-2">Price</th>
            <th className=" border p-2">Category</th>

            <th className=" border p-2">Cover Image</th>
            <th className=" border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {callingBook.map((book, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">{book.author}</td>
              <td className="border p-2">
                {book.price}
                {book.discountprice}
              </td>
              <td className="border p-2">{book.category}</td>

              <td className="border p-2">{book.cover_image}</td>
              <td className="border p-2">Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
