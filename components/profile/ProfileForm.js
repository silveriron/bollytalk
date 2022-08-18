import Input from "../ui/Input";
import { useSelector } from "react-redux";
import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import style from "./ProfileForm.module.css";

const ProfileForm = () => {
  const email = useSelector((state) => state.auth.email);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const firstProfile = useSelector((state) => state.auth.firstProfile);
  const router = useRouter();

  if (isLogin) {
    const nickNameHandler = async (e) => {
      e.preventDefault();
      const nickName = e.target.nickName.value;
      const res = await fetch("/api/profile", {
        method: "PATCH",
        body: JSON.stringify({ nickName, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        console.log(data.message);
        return;
      }

      router.replace("/");
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
        {firstProfile ? welcome : oldUser}
        <form onSubmit={nickNameHandler}>
          <Input name="nickName" label="닉네임" type="text" />
          <div className={style.btnDiv}>
            <button>저장</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <>
        <h1>권한없음</h1>
        <button
          onClick={() => {
            router.replace("/auth");
          }}
        >
          돌아가기
        </button>
      </>
    );
  }
};

// export const getServerSideProps = (context) => {
//   const session = getSession({ req: context.req });
//   return {
//     props: { session },
//   };
// };

export default ProfileForm;
