import { Container } from "react-bootstrap"
import SignUpForm from "../components/SignUpForm"

const SignUp = () => {
  return (
    <Container>
      <h1>회원가입</h1>
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
