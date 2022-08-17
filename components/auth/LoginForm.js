import { useState } from "react";
import Input from "../ui/Input";
import style from "./LoginForm.module.css";
import { signIn } from "next-auth/react";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [login, setLogin] = useState(true);
  const [isSetUp, setIsSetUp] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const funcChangeHandler = () => {
    setLogin((prev) => !prev);
  };

  const LoginHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!login) {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (res.ok) {
        dispatch(authActions.signUp(email));
        router.push("/auth/profile");
      } else {
        console.log(data.message);
      }
    } else {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!result.ok) {
        return console.log(result);
      }
      console.log("login");
      dispatch(authActions.login());
      router.replace("/");
    }
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
