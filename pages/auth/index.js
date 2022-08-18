import LoginForm from "../../components/auth/LoginForm";
import style from "./index.module.css";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Auth = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (props.session) {
      router.replace("/");
    }
  }, []);

  return (
    <div className={style.auth}>
      <LoginForm />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      props: { session },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Auth;
