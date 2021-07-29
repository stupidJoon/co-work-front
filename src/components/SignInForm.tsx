import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import { baseURL } from '../config';

const SignInForm = () => {
  const router = useRouter();
  const [msg, setMsg] = useState();
  const [values, onChange, onSubmit] = useForm(
    { id: '', password: '' },
    async () => {
      console.log(values);
      const result = await fetch(`${baseURL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((response) => response.json());
      console.log(result);
      if (result.success) {
        router.push('/');
      } else {
        setMsg(result.msg);
      }
    },
  );

  return (
    <>
      <h1>로그인</h1>
      <p className="text-danger">{msg}</p>
      <Form onSubmit={onSubmit}>
        <Form.Group className="my-3">
          <FloatingLabel label="ID">
            <Form.Control
              type="text"
              name="id"
              placeholder="ID"
              value={values.id}
              onChange={onChange}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="password">
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
              onChange={onChange}
            />
          </FloatingLabel>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            로그인
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignInForm;
