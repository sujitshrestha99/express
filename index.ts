import express, { Request, Response } from "express";

const app = express();
const PORTt = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// const PORT = 3000;
app.listen(PORTt, () => {
  console.log(`Server running on port ${PORTt}`);
});
