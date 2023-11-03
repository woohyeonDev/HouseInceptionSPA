'use client'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const { status } = useSession();
    const router = useRouter();  
    useEffect(() => {
      if (status === 'loading') return; // 로딩 중이면 아무것도 하지 않음.
      if (status === 'authenticated') {
        router.push('/views/home'); // 인증된 상태면 홈 뷰로 리디렉션.
      } else {
        signIn(); // 인증되지 않았으면 로그인 페이지로 이동.
      }
    }, [status, router]); // status나 router가 바뀔 때만 이 효과를 실행합니다.
  
    if (status === 'loading') {
      return <p>Loading...</p>; // 로딩 중일 때는 로딩 인디케이터를 보여줍니다.
    }
    return <p>Redirecting...</p>;
}
