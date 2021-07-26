import { Col, Container, Row } from "react-bootstrap";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

const Index = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8}>
          <h1 className="text-center">TODO List</h1>
          <AddTodoForm />
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
