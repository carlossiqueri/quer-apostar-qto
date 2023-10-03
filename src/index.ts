import * as express from "express";
import * as dotenv from "dotenv";
import { health } from "./routers";
import participantsRouter from "./routers/participants-router";

dotenv.config();

const app = express();
app
  .use(express.json())
  .use('/health', health)
  .use('/participants', participantsRouter);

const port: number = parseInt(process.env.PORT) || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});