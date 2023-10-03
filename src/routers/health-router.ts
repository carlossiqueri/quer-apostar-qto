import { Request, Response, Router } from "express";

const health = Router();

health.get("/", (req: Request, res: Response) => {
  res.send('Ok!');
});

export { health };
