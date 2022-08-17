import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Home = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!props.session) {
      router.replace("/auth");
    }
  }, []);

  if (props.session) {
    dispatch(authActions.login());

    return <p>Home Page</p>;
  }
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      props: {
        session,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Home;
