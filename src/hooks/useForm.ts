import { ChangeEvent, FormEvent, useState } from "react"

const useForm = (initialState: any, onSubmit: () => void) => {
  const [values, setValues] = useState(initialState);

  return [
    values,
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues({...values, [name]: value});
    },
    (event: FormEvent) => {
      event.preventDefault();
      onSubmit();
    }
  ];
}

export default useForm;
