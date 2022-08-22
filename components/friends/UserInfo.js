import style from "./UserInfo.module.css";

const UserInfo = ({ nickName }) => {
  return (
    <>
      <div className={style.info}>
        <p className={style.nickName}>{nickName}</p>
        <p className={style.comment}>볼리는 귀여워</p>
      </div>
    </>
  );
};
export default UserInfo;
