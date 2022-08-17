import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connect from "../../../lib/db";
import { comparePassword } from "../../../lib/auth";

export default NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(email, password);
        const db = await connect();
        const user = await db.collection("user").findOne({ email });
        if (!user) {
          db.close();
          throw new Error("로그인 정보를 다시 확인해주세요.");
        }

        const compared = await comparePassword(password, user.password);
        if (!compared) {
          db.close();
          throw new Error("로그인 정보를 다시 확인해주세요.");
        }
        return user.email;
      },
    }),
  ],
});
