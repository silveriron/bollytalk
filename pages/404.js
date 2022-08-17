import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  router.replace("/");
  return <p>Not Found</p>;
};

export default NotFound;
