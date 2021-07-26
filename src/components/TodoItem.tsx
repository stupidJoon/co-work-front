import { Button, Col, Row } from "react-bootstrap";

const TodoItem = () => {
  return (
    <Row className="border rounded p-0 mt-3">
      <Col className="text-center align-self-center">text text texttext text</Col>
      <Col xs="auto" className="p-0">
        <Button variant="danger">삭제</Button>
      </Col>
    </Row>
  );
};

export default TodoItem;
