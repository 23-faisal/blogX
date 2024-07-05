import { app } from "./app.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Server is running at port: ${port}!!!`);
  await connectDB();
});
