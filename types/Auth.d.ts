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

export type { ILogin, IRegister };
