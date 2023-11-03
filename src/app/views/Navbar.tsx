'use client'
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();
    const menu = [
        {href: '/views/docs', clickedIcon : 'docs', icon: 'docs'}
    ]        
    return (
        <nav className="flex items-center justify-between px-6 bg-zinc-700 text-white">
            <Link href="/views/home">
                <h1 className="text-3xl font-bold">HousInception</h1>
            </Link>          
            <ul className="flex gap-4 items-center p-4">
            {menu.map((item) => (
            <li key={item.href}>
                <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
                </Link>
            </li>
            ))}
            <button className="w-20" onClick={()=>signOut()}> 로그아웃 </button>  
            </ul>                   
        </nav>        
    );
}