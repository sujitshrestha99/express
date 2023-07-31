import express, { Request, Response } from "express";

const app = express();
const PORTt = process.env.PORT || 3000;

app.get("/", (req:Request, res:Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/bookstore",(req,res)=>{
  res.send("this is the book store and here you can get many type of the books aof the diffrent genre");
})

// const PORT = 3000;
app.listen(PORTt, () => {
  console.log(`Server running on port ${PORTt}`);
});
