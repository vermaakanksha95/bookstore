
import ConnectDb from "@/app/db/Connect";
import Category from "@/models/Category";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import{join} from "path";
import { writeFile } from 'fs/promises';
import Book from "@/models/Book";

const page = async () => {
 
  const callingCat = await Category.find({});
  const handleSubmit = async (formdata) => {
    "use server";

    //image work

    let cover_image = formdata.get("cover_image");
    let bytes = await cover_image.arrayBuffer();
    let buffer = Buffer.from(bytes);
    let path = join("./public","books-img",cover_image.name);
    await writeFile(path,buffer);

     let  data={
      title:formdata.get("title"),
      author:formdata.get("author"),
      price:formdata.get("price"),
      discountprice:formdata.get("discountprice"),
      cover_image:formdata.get("cover_image").name,
      description:formdata.get("description"),
     category:formdata.get("category"),
     
     }
     ConnectDb();
     let create = await Book.create(data);
     redirect("/admin/books");

      }
  return (
    
    
    <div className=" flex flex-col  flex-1  ">
      <div className="flex flex-1 justify-between items-center p-5 ">
        <h1 className="text-xl font-semibold   text-slate-600">
          Insert Book
        </h1>
        <Link
          href="/admin/books"
          className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded"
        >
          Go Back
        </Link>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="w-1/2 px-[5%] ">
          <div className="bg-slate-100 shadow-lg border border-slate-200 p-2">
            <form action={handleSubmit} method="POST">
            <div className=" flex gap-3">
                <div className="mb-3 flex flex-col">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="border px-3 py-2"
                  />
                </div>
                <div className=" flex gap-3">
                  <div className="mb-3 flex flex-col">
                    <label htmlFor="author">Author</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      className="border px-3 py-2"
                    />
            </div>
                  
                </div>
                </div>
            <div className=" flex gap-3">
            <div className="mb-3 flex flex-col">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      className="border px-3 py-2"
                    />
            </div>
            <div className="mb-3 flex flex-col">
                    <label htmlFor="author">Discount Price</label>
                    <input
                      type="text"
                      id="discountprice"
                      name="discountprice"
                      className="border px-3 py-2"
                    />
            </div>
                
                </div>
            <div className=" flex gap-3">
            <div className="mb-3 flex flex-col">
                    <label htmlFor="category">Category</label>
                    <select
                    
                      id="category"
                      name="category"
                      className="border px-3 py-2"
                    >
                        <option value="" selected disabled>Select Category</option>
                        {
                            callingCat.map((cat,i) => <option  value={cat._id}>{cat.cat_title}</option>) 
                        }
                    </select>
            </div>
            <div className="mb-3 flex flex-col">
                    <label htmlFor="cover_image">Cover Image</label>
                    <input
                      type="file"
                      id="cover_image"
                      name="cover_image"
                      className="border px-3 py-2"
                    />
            </div>
                
                </div>
              
              <div className="mb-3 flex flex-col">
                <label htmlFor="description"> Description</label>
                <textarea
                  rows="5"
                  id="description"
                  name="description"
                  className="border px-3 py-2"
                ></textarea>
              </div>
              <div className="mb-3 flex flex-col">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-800 text-white px-3 py-2 rounded-lg"
                >
                  Insert Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default page;
