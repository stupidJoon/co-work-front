// import { Col, Container, Row } from "react-bootstrap";
// import AddTodoForm from "../components/AddTodoForm";
// import TodoList from "../components/TodoList";

import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

// const Index = () => {
//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={8}>
//           <h1 className="text-center">TODO List</h1>
//           <AddTodoForm />
//           <TodoList />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Index;


const Index = () => {
  const [name, setName] = useState();
  const router = useRouter();
  useEffect(() => {
    const checkLogin = async () => {
      const result = await fetch('https://4c002eb24393.ngrok.io/logincheck', {
        credentials: 'include'
      }).then((response) => response.json());
      console.log(result);
      if (result.success) {
        setName(result.name);
      }
    };
    checkLogin();
  }, []);

  const onSignOut = async () => {
    await fetch('https://4c002eb24393.ngrok.io/logout', {
      credentials: 'include'
    });
    router.reload();
  };

  if (name) {
    return (
      <>
        <h1>{name}님 안녕하세요!</h1>
        <Button onClick={onSignOut}>로그아웃</Button>
      </>
    );
  } else {
    return (
      <>
        <h1>아직 로그인 하지 않았습니다</h1>
        <Link href="/signin">
          <a>로그인하러가기</a>
        </Link>
        <br />
        <Link href="/signup">
          <a>회원가입하러가기</a>
        </Link>
      </>
    );
  }
};

export default Index;
