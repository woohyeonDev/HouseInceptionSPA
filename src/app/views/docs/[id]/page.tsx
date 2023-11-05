"use client"
import { FormEvent, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function CreatePost({ params }: { params: { id: string } }) {
    const router = useRouter()
    const { data: session } = useSession();
    const user = session?.user
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');


    useEffect(()=>{
        const fetchDoc =async () => {
            const response = await fetch(`http://localhost:8080/api/posts/${params.id}`)
            const res_data : Doc = await response.json()
            console.log("fetchDoc",res_data);
            setTitle(res_data.title)
            setContent(res_data.content)
            setLink(res_data.link)
        }
        fetchDoc()        
    },[params.id, session])


    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/posts', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content , link, user }),
        });

        if (response.ok) {
            alert('Post created successfully!');
            setTitle('');
            setContent('');            
        } else {
            alert('Error creating post.');
        }
    };

    return (

        <div className=' flex flex-nowrap'>
            <div className="container w-1/4 h-screen bg-white ">
                <div className=' m-2 border  bg-gray-50'>
                    <div className=' text-white bg-zinc-700'>
                    <h2 className=" font-bold  text-center ">Detail</h2>
                    </div>                   
                    <div className=' m-3 min-h-[300px] bg-white'>                       
                        <div>
                            <div className=' m-1'>
                                Title: {title}
                            </div>                       
                            <div className=' py-1 px-3'>
                                {content} 
                            </div>                            
                        </div>                  
                                        
                    </div>     
                    <div className='w-full flex flex-nowrap justify-center'>
                        <button type="submit" className="   m-3  px-4 py-2 text-white  bg-pink-900 focus:bg-zinc-700 focus:outline-none">Delete Post</button>
                        <button type="submit" className="   m-3  px-4 py-2 text-white  bg-zinc-600  focus:bg-zinc-700 focus:outline-none">Update Post</button>
                    </div>         
                    
                </div>               
            </div>
            <div className="w-1/2  border   h-screen mt-2">
                <div className=' bg-zinc-700 text-white font-bold text-center'>
                    docs
                </div>
                {link && (
                    <iframe
                        src={link}
                        title="Preview"
                        width="100%"
                        height="100%"
                        className=' scale-100 origin-top-left '
                    ></iframe>
                )}
            </div>
        </div>
        

    );
}