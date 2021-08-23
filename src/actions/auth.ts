export const startLogin = (email: string, password: string) => {
  return async () => {
    console.log({ email, password });
  };
};
