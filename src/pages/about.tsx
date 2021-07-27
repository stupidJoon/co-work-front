import Link from 'next/link';
import { useEffect, useState } from 'react';

const About = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLogin = async () => {
      const result = fetch('https://90098acc55ab.ngrok.io/login-check')
        .then((response) => response.json());
    };
    checkLogin();
  }, []);

  if (isLoggedin) {
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

export default About;
