import { User } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import authServices from "@/services/auth";
import environment from "@/configs/environment";

export const authOptions: NextAuthOptions = {
  debug: true,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 day
  },
  secret: environment.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        identifier: { label: "identifier", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: Record<"identifier" | "password", string> | undefined
      ): Promise<User | null> {
        const { identifier, password } = credentials as {
          identifier: string;
          password: string;
        };

        const result = await authServices.login({ identifier, password });

        const accessToken = result.data.data;
        const me = await authServices.getProfileWithToken(accessToken);
        const user = me.data.data;

        if (
          accessToken &&
          result.status === 200 &&
          me.status === 200 &&
          user.id
        ) {
          user.accessToken = accessToken;
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
        session.accessToken = token.user?.accessToken;
      }
      return session;
    },
  },
};
