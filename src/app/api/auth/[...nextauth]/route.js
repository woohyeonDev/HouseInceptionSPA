import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "", // 수정!!!!
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", // 수정!!!!
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {     
          return true            
        // 로그인을 허용하거나 거부합니다.
      },
      async redirect({ url, baseUrl }) {
        // 사용자가 로그인 후 리디렉션되어야 할 URL을 반환합니다.
        // url은 로그인을 시도한 후 리디렉션되기 전의 URL입니다.
        // baseUrl은 NextAuth의 설정에 정의된 사이트의 기본 URL입니다.
        // 여기서는 기본 URL로 항상 리디렉션하도록 설정되어 있습니다.
        return baseUrl+"/views/home";
      },    
      async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token
        }
        return token
      },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken
        return session
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET || "",
    },


  });

  
export { handler as GET, handler as POST };