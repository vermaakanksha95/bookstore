import Image from "next/image";
import ConnectDb from "./db/Connect";
import Category from "@/models/Category";
import Link from "next/link";

export default async function Home() {
  ConnectDb();
  let callingCategory = await Category.find();
  return (

    <>
    <div className="  flex-1 h-[300px] justify-center items-center">
    <img src="./bk.jpg" className=" h-[300px] w-full object-cover"/>
      
      <div className=" w-1/2 flex flex-col gap-2 -mt-[20%] p-10 text-center justify-center m-[24%] space-y-5">
      <h1 className=" text-3xl  text-slate-200 font-semibold tex">Find Your Favourite Book</h1>
      <input type="search" className=" border px-4 py-3 rounded-md text-black" placeholder=" Search by
       title,author,category etc..."/>
      <input type="submit" className="bg-white text-black rounded px-3 py-2 hover:bg-slate-600
       hover:text-white self-center " value="Search Book" />

      </div>

    </div>

    <div className=" px-[3%] mt-2">


    <div className=" flex flex-1 gap-3">
      {callingCategory.map((cat,i) => <Link key={i} href="#" className="flex  px-3 py-2 bg-slate-800
       hover:bg-slate-500 rounded-lg text-white ">{cat.cat_title}</Link>)}

    </div>
    </div>


    </>
    
  );
}
