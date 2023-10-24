import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "", // 수정!!!!
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", // 수정!!!!
      }),
    ],
  });
  
export { handler as GET, handler as POST };