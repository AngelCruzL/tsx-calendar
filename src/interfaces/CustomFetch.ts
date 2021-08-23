interface BasicDataFetch {
  email: string;
  name?: string;
  password: string;
}

interface LoginFetch {
  loginEmail: string;
  loginPassword: string;
}

interface RegisterFetch {
  registerEmail: string;
  registerName: string;
  registerPassword: string;
  registerPasswordConfirmation: string;
}

export type CustomFetch = LoginFetch | BasicDataFetch | RegisterFetch;
