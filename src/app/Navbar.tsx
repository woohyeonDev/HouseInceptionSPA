'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession(); //세션 정보를 가져옴
    const menu = [
        {href: '/views/docs', clickedIcon : 'docs', icon: 'docs'}
    ]
    return (
        <nav className="flex items-center justify-between px-6">
            <Link href="/">
                <h1 className="text-3xl font-bold">unigram</h1>
            </Link>

            <ul className="flex gap-4 items-center p-4">
                {menu.map((item) => (
                <li key={item.href}>
                    <Link href={item.href}>
                    {pathname === item.href ? item.clickedIcon : item.icon}
                    </Link>
                </li>
                ))}

                {session ? ( 
                        <button onClick={() => signOut()}> 로그아웃 </button>
                    ) : ( 
                        <button onClick={() => signIn()}> 로그인 </button>
                    )
                }
            </ul>
        </nav>        
    );
}