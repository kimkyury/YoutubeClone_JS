import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/dbdbdip", {
  useNewUrlParse: true,
  userUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log(" ✅ Connected to DB");
const handleError = (error) => console.log(" ❌ DB Error", error);

db.on("error", handleError);
db.once("oppen", handleOpen);
