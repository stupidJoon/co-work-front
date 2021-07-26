import { Form, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm';

const SignInForm = () => {
  const [values, onChange, onSubmit] = useForm(
    { id: '', password: '' },
    async () => {
      console.log(values);
      const result = await fetch('https://49e486002277.ngrok.io/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then((response) => response.json());
      console.log(result);
    }
  );

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" name="id" placeholder="id를 입력하세요" value={values.id} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="password를 입력하세요" value={values.password} onChange={onChange} />
      </Form.Group>
      <Button variant="primary" type="submit">로그인</Button>
    </Form>
  );
};

export default SignInForm;
