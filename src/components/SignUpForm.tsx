import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm';

const SignUpForm = () => {
  const router = useRouter();
  const [values, onChange, onSubmit] = useForm(
    { id: '', name: '', password: '' },
    async () => {
      console.log(values);
      await fetch('https://90098acc55ab.ngrok.io/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then((response) => response.json());
      router.push('/signin');
    }
  );

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" name="id" placeholder="id를 입력하세요" value={values.id} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" name="name" placeholder="name을 입력하세요" value={values.name} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="password를 입력하세요" value={values.password} onChange={onChange} />
      </Form.Group>
      <Button variant="primary" type="submit">회원가입</Button>
    </Form>
  );
};

export default SignUpForm;
