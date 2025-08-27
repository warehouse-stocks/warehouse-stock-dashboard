import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // wajib
    username?: string; // custom
    role?: string; // custom
    accessToken?: string; // token dari API
  }

  interface Session {
    user: User & DefaultSession["user"];
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: User;
  }
}
