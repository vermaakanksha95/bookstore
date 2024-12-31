import React from 'react'


import { redirect } from 'next/navigation';
import Category from '@/models/Category';
import ConnectDb from '@/app/db/Connect';

const page = async () => {

    ConnectDb();

    let callingCat = await Category.find();
    
    


    const handleSubmit = async(formdata) => {
        "use server"
        let cat_title = formdata.get("cat_title");
        let cat_desc = formdata.get("cat_desc");

        let record = {cat_title,cat_desc};
        let data = await Category.create(record);

        redirect("/admin/categories");


    }
  return (
    
    <div className=' flex p-5 '>
        
        <div className="w-1/4 p-4">
            <div className='bg-slate-100 shadow-lg border border-slate-200 p-2'>
                <form action={handleSubmit} method="POST">
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="cat_title">Category Title</label>
                        <input type="text" id='cat_title' name='cat_title' className='border px-3 py-2' />

                    </div>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="cat_desc">Category Description</label>
                        <textarea rows="5" id='cat_desc' name='cat_desc' className='border px-3 py-2'></textarea>

                    </div>
                    <div className='mb-3 flex flex-col'>
                        <button type='submit' className='bg-teal-500 hover:bg-teal-800 text-white px-3 py-2 rounded-lg'>Create Categories</button>

                    </div>

                </form>

            </div>
        </div>

        <div className="w-3/4">
        <h1  className='text-xl font-semibold p-3 text-slate-600'>Manage Categories({callingCat.length})</h1>
        <table  className=' border w-full p-5'>
            <thead>
                <tr> 
                    <th  className=' border p-2'>Id</th>
                    <th className=' border p-2'>CatTitle</th>
                    <th className=' border p-2'>CatDescription</th>
                    <th className=' border p-2'>Action</th>
                </tr>
            </thead>
            <tbody>
                {callingCat.map((cat,index) =>(
                    <tr key={index}>
                        <td className='border p-2'>{index+1}</td>
                        <td className='border p-2'>{cat.cat_title}</td>
                        <td className='border p-2'>{cat.cat_desc}</td>
                        <td className='border p-2'></td>
                        
                    </tr>
                ))}

            </tbody>
        </table>
        </div>

      
    </div>
  )
}

export default page
