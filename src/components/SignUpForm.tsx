import { Form, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm';

const SignUpForm = () => {
  const [values, onChange, onSubmit] = useForm(
    { id: '', password: '' },
    () => {
      console.log(values);
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
      <Button variant="primary" type="submit">회원가입</Button>
    </Form>
  );
};

export default SignUpForm;
