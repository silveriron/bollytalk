import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connect from "../../../lib/db";
import { comparePassword } from "../../../lib/auth";

export default NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(req.body);
        const [email, password] = req.body;
        const db = await connect();
        const user = await db.collection("user").findOne({ email });
        if (user) {
          const compared = await comparePassword(password, user.password);

          if (compared) {
            return user.email;
          }
        }
        return null;
      },
    }),
  ],
});
