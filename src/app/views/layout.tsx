'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { useRecoilState } from "recoil";
import { userState } from "@/states/atoms";
export default function ViewsLayout({ children }: { children: React.ReactNode }) {
    console.log('viewsLayout');
    const session = useSession();
    const [user,setUser] = useRecoilState(userState)   
    console.log(session);      
    useEffect(()=>{
        if(!session || session.status === "loading") return;
        if(session.status == "unauthenticated"){
            window.location.href = '/';
         }                
        const saveUser =async () => {
            const response = await fetch("http://localhost:8080/api/users",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(session?.data?.user),
            })       
           const res_data =await response.json()
           console.log('res_Data',res_data);
           setUser(res_data)                           
        }
        saveUser();        
    },[session])    
    return(
        <div className="">
            <header className="w-full sticky top-0 bg-white z-10 border-b ">
                <Navbar />
            </header>
            <main className="">{children}</main>  
        </div>    
    )
}