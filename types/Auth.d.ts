import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";

interface ILogin {
  identifier: string;
  password: string;
}

interface IRegister {
  username: string;
  email: string;
  password: string;
  role?: string;
}

interface UserExtended extends User {
  accessToken?: string;
  role?: string;
}

interface SessionExtended extends Session {
  accessToken?: string;
}

interface JWTExtended extends JWT {
  user?: UserExtended;
}

export type { ILogin, IRegister, UserExtended, SessionExtended, JWTExtended };
