import connect from "../../../lib/db";

const profileChange = async (req, res) => {
  if (req.method === "PATCH") {
    const { nickName, email } = req.body;
    const db = await connect();
    const result = await db
      .collection("user")
      .updateOne({ email: email }, { $set: { nickName } });

    res.status(201).json({ message: "정상 처리되었습니다." });
  }
};
export default profileChange;
