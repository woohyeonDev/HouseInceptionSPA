import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from "next-auth/react"
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {   
  console.log('next-auth12312');
  // return NextResponse.redirect(new URL('/home', request.url))
}
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [],
// }