'use client'
import { useEffect, useState } from "react"
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
export default function docs() {
  const { status } = useSession();
  
  const router = useRouter();
  const [docs, setDocs] = useState<Doc[]>([]);
  const fetchDocs = async () =>{         
    const res = await fetch(`http://localhost:8080/api/posts`);
    if(!res.ok){
      alert("데이터가 없습니다.")
    }else{
      const data = await res.json();
      console.log('data',data);
      setDocs(data);
    }           
  }  
  useEffect(()=>{   
    if(status=="loading")return;
    fetchDocs()    
  },[status])
  return (
  <div className="bg-gray-100 min-h-screen p-8">
    <div className="container px-20">
      <button
        onClick={() => router.push('/views/docs/new-docs')}
        className="mb-4 bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"      >
        Create New Doc
      </button>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {docs && docs.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                {doc.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {/* Assuming there's a description or content summary */}
                {doc.content.slice(0, 100)}...
              </p>
              <button
                onClick={() => router.push(`/docs/${doc.id}`)}
                className="text-zinc-500 hover:text-zinc-700 transition-colors duration-200"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

