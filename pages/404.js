import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, []);
};

export default NotFound;
