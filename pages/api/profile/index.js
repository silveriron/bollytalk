import connect from "../../../lib/db";

const profileChange = async (req, res) => {
  if (req.method === "PATCH") {
    const { nickName, email } = req.body;

    if (nickName.trim() === "" || !email) {
      res.status(422).json({ message: "입력을 확인해주세요." });
      return;
    }
    const db = await connect();
    const result = await db
      .collection("user")
      .updateOne({ email: email }, { $set: { nickName } });

    res.status(201).json({ message: "정상 처리되었습니다." });
  }
};
export default profileChange;
