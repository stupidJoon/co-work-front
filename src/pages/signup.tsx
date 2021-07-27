import { Container, Row, Col } from "react-bootstrap"
import SignUpForm from "../components/SignUpForm"

const SignUp = () => {
  return (
    <Container fluid>
      <Row className="vh-100 justify-content-center align-items-center bg-light">
        <Col xs={6}>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
