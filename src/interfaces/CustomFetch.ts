interface BasicDataFetch {
  email?: string;
  password?: string;
}

interface LoginFetch {
  loginEmail?: string;
  loginPassword?: string;
}

export type CustomFetch = LoginFetch | BasicDataFetch;
