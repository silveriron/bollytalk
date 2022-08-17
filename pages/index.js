import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const router = useRouter();
  const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    if (!isLogin) {
      router.replace("/auth");
    }
  }, []);

  if (isLogin) {
    return <p>Home Page</p>;
  }

  return;
};

export default Home;
