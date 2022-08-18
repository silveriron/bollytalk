import style from "./UserInfo.module.css";

const UserInfo = ({ nickName }) => {
  return (
    <>
      <div className={style.info}>
        <p>{nickName}</p>
        <p>볼리는 귀여워</p>
      </div>
    </>
  );
};
export default UserInfo;
