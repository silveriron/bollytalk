import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connect from "../../../lib/db";
import { comparePassword } from "../../../lib/auth";

export default NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        const db = await connect();
        const data = await db.collection("user").findOne({ email });
        if (!data) {
          db.close();
          throw new Error("로그인 정보를 다시 확인해주세요.");
        }

        const compared = await comparePassword(password, data.password);
        if (!compared) {
          db.close();
          throw new Error("로그인 정보를 다시 확인해주세요.");
        }

        const user = {
          id: data._id.toString(),
          name: data.nickName,
          email: data.email,
        };

        console.log(user);

        return user;
      },
    }),
  ],
});
