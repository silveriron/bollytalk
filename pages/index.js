import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserInfo from "../components/friends/UserInfo";
import { authActions } from "../store/auth";

const Home = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!props.session) {
      router.replace("/auth");
    } else {
      dispatch(
        authActions.login({
          email: props.session.user.email,
          nickName: props.session.user.name,
        })
      );
      router.replace("/friends");
    }
  }, [props.session, router, dispatch]);
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
