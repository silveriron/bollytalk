import LoginForm from "../../components/auth/LoginForm";
import style from "./index.module.css";

const auth = () => {
  return (
    <div className={style.auth}>
      <LoginForm />
    </div>
  );
};
export default auth;
