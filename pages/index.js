import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../components/ui/UserInfo";
import { authActions } from "../store/auth";

const Home = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.auth.nickName);

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
    }
  }, [props.session, router, dispatch]);

  if (props.session) {
    return (
      <>
        <h2>친구</h2>
        <UserInfo nickName={props.session?.user?.name} />
      </>
    );
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
