import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Home = () => {
  const router = useRouter();
  const isLogin = useSelector((state) => state.auth.isLogin);

  if (!isLogin && router) {
    router.replace("/auth");
    return;
  }
  return <p>Home Page</p>;
};

export default Home;
