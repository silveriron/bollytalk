import Input from "../ui/Input";
import { useSelector } from "react-redux";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import style from "./ProfileForm.module.css";

const ProfileForm = (props) => {
  const email = useSelector((state) => state.auth.email);
  const router = useRouter();

  useEffect(() => {
    if (props.session) {
      router.replace("/");
    }
  }, []);

  const nickNameHandler = async (e) => {
    e.preventDefault();
  };

  const welcome = (
    <>
      <h1>가입 완료!</h1>
      <p>
        bollytalk에 가입하신 걸 환영합니다. <br />
        프로필을 설정해주세요.
      </p>
    </>
  );

  const oldUser = <h1>프로필 변경</h1>;

  return (
    <div className={style.profileForm}>
      {email ? welcome : oldUser}
      <form onSubmit={nickNameHandler}>
        <Input name="nickName" label="닉네임" type="text" />
        <div className={style.btnDiv}>
          <button>저장</button>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = (context) => {
  const session = getSession({ req: context.req });
  return {
    props: { session },
  };
};

export default ProfileForm;
