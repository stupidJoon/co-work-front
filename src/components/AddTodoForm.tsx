import { Button, Form, InputGroup } from 'react-bootstrap';
import useForm from '../hooks/useForm';

const AddTodoForm = () => {
  const [values, onChange, onSubmit] = useForm(
    { todo: '' },
    () => {
      console.log('submitted');
    }
  )
  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="추가할 TODO를 적어주세요"
          name="todo"
          value={values.todo}
          onChange={onChange}
        />
        <Button type="submit">추가하기</Button>
      </InputGroup>
    </Form>
  );
};

export default AddTodoForm;
