import { hashPassword } from "../../../lib/auth";
import connect from "../../../lib/db";

const signup = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!regEmail.test(email) || password.trim() < 6) {
      return res.status(422).json({ message: "가입 양식을 확인해주세요." });
    }
    const db = await connect();
    const alreadySignUp = await db.collection("user").findOne({ email });
    if (alreadySignUp) {
      res.status(422).json({ message: "이미 가입한 이메일입니다." });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db
      .collection("user")
      .insertOne({ email, password: hashedPassword });

    if (!result) {
      return res.status(500).json({
        message: "서버에 문제가 있습니다. 잠시 후 다시 시도해주세요.",
      });
    }

    res.status(201).json({ message: "회원 가입이 완료되었습니다." });
  }
};

export default signup;
