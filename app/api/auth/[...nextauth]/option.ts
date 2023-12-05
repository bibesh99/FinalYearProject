
// import type { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { GoogleProfile } from "next-auth/providers/google";

// export const options:NextAuthOptions={
//     providers:[
//         GoogleProvider({
//             profile(profile: GoogleProfile) {
//                     return {
//                     ...profile,
//                     role: profile.role ?? "user",
//                     id: profile.id.toString(),
//                     image: profile.avatar_url,
//                 }
//             },
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      
//         }),
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 username: {
//                     label: "Username:",
//                     type: "text",
//                     placeholder: "Enter Your Username"
//                 },
//                 password: {
//                     label: "Password:",
//                     type: "password",
//                     placeholder: "Enter Your Password"
//                 }
//             },
//             async authorize(credentials) {
//                 const user = { id: "42", name: "Dave", password: "nextauth", role: "manager" }

//                 if (credentials?.username === user.name && credentials?.password === user.password) {
//                     return user
//                 } else {
//                     return null
//                 }
//             }
//         })
//     ],
//     callbacks: {
//         // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
//         async jwt({ token, user }) {
//             if (user) token.role = user.role
//             return token
//         },
//         // If you want to use the role in client components
//         async session({ session, token }) {
//             if (session?.user) session.user.role = token.role
//             return session
//         },
//     }
// }