'use client'
import { userState } from "@/states/atoms"
import { useRecoilState, useRecoilValue } from "recoil"

export default function Home() { 
  const [user,setUser] = useRecoilState<User>(userState)   
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
              
            </div>
            <div>
              {user &&(
                <span className="text-gray-800 text-sm">{user.name}</span>
              ) }
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to ChatGPT Docs
          </h1>
          <h2 className="text-2xl mb-8 text-gray-600">
            Discover and share knowledge with ChatGPT
          </h2>
          <button className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-full">
            Explore Docs
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-16">
        {/* 컨텐츠와 게시글들이 들어갈 자리 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* 게시글 카드 컴포넌트를 여기에 배치 */}
        </div>
      </main>

      <footer className="bg-white shadow mt-16 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2023 House Inception. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
