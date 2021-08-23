import { useState } from 'react';

export const useForm = (initialState: any = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: React.FormEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [(target as HTMLInputElement).name]: (target as HTMLInputElement).value,
    });
  };

  return [values, handleInputChange, reset];
};
