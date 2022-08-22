import UserSolidIcon from "../icon/UserSolidIcon";
import ChatIcon from "../icon/ChatIcon";
import MoreIcon from "../icon/MoreIcon";
import style from "./Navigator.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navigators = (props) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <>
      <main className={style.main}>{props.children}</main>
      {isLogin && (
        <nav className={style.navBar}>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <UserSolidIcon className={style.icon} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/chat">
                <a>
                  <ChatIcon className={style.icon} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="more">
                <a>
                  <MoreIcon className={style.icon} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigators;
