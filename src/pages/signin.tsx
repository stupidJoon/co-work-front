import { Col, Container, Row } from "react-bootstrap"
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <Container fluid>
      <Row className="vh-100 justify-content-center align-items-center bg-light">
        <Col xs={6}>
          <SignInForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
