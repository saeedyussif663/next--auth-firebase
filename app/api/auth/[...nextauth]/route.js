// NextAuth.js

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
        email: {},
      },
      async authorize(credentials) {
        const user = {
          name: "saeed",
          password: "1234",
          email: "saeed@test.com",
        };

        // Compare entered credentials with user data
        if (
          credentials?.password === user.password &&
          credentials?.email === user.email
        ) {
          return { email: user.email, name: user.name };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        session.user = {
          email: token.email,
          name: token.name,
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
