import { useSelector } from "react-redux";
import FriendsMenuBar from "../../components/friends/FriendsMenuBar";
import UserInfo from "../../components/friends/UserInfo";

const FriendsPage = () => {
  const nickName = useSelector((state) => state.auth.nickName);

  return (
    <>
      <FriendsMenuBar />
      <UserInfo nickName={nickName} />
    </>
  );
};

export default FriendsPage;
