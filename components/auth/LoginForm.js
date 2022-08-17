import { useState } from "react";
import Input from "../ui/Input";
import style from "./LoginForm.module.css";

const LoginForm = () => {
  const [login, setLogin] = useState(true);

  const funcChangeHandler = () => {
    setLogin((prev) => !prev);
  };

  const LoginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={style.loginForm} onSubmit={LoginHandler}>
        <h1>{login ? "로그인" : "회원 가입"}</h1>
        <Input
          className={style.inputDiv}
          name="email"
          label="이메일"
          type="text"
        />
        <Input name="password" label="패스워드" type="password" />
        <div className={style.btnDiv}>
          <button>{login ? "로그인" : "가입"}</button>
        </div>
        <p onClick={funcChangeHandler}>
          <span>{login ? "가입하기" : "로그인하기"}</span>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
