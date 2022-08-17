import { MongoClient } from "mongodb";

const MONGODB_DOMAIN =
  "mongodb+srv://test:mCEteQ4A50Wc7X9t@cluster0.fk4bm.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  const client = await MongoClient.connect(MONGODB_DOMAIN);
  const db = client.db("bollytalk");
  return db;
};

export default connect;
