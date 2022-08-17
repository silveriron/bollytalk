import { useRouter } from "next/router";

const Home = ({ isLogin }) => {
  const router = useRouter();
  if (!isLogin) {
    router.replace("/auth");
    return;
  }
  return <p>Home Page</p>;
};

export const getServerSideProps = () => {
  return {
    props: {
      isLogin: false,
    },
  };
};

export default Home;
