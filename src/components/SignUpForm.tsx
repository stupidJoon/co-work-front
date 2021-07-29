import { useRouter } from 'next/router';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { baseURL } from '../config';
import useForm from '../hooks/useForm';

const SignUpForm = () => {
  const router = useRouter();
  const [values, onChange, onSubmit] = useForm(
    { id: '', name: '', password: '' },
    async () => {
      console.log(values);
      await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((response) => response.json());
      router.push('/signin');
    },
  );

  return (
    <>
      <h1>회원가입</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="my-3">
          <FloatingLabel label="ID">
            <Form.Control
              type="text"
              name="id"
              placeholder="id"
              value={values.id}
              onChange={onChange}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="name">
            <Form.Control
              type="text"
              name="name"
              placeholder="name"
              value={values.name}
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

export default SignUpForm;
