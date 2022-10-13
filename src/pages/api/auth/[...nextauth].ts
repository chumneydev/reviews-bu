
import NextAuth, { type NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0"

export const authOptions: NextAuthOptions = {
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_ID as string,
            clientSecret: process.env.AUTH0_SECRET as string,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
    theme: {
        colorScheme: "dark",
    },
    callbacks: {
        async jwt({ token }: any) {
            token.userRole = "admin"
            return token
        }
    },
};


export default NextAuth(authOptions)