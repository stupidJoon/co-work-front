import { Container } from "react-bootstrap"
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <SignInForm />
    </Container>
  );
};

export default SignIn;
