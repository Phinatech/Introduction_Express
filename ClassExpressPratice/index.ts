import express, { Application, Request, Response } from "express";
const app: Application = express();
const PORT = 5678;

app.use(express.json());

let CodelabData = [
  {
    id: 1,
    name: "Judith",
    set: "06",
    stack: "full stack",
  },

  {
    id: 1,
    name: "Judith",
    set: "06",
    stack: "full stack",
  },

  {
    id: 1,
    name: "Judith",
    set: "06",
    stack: "full stack",
  },
  {
    id: 1,
    name: "Judith",
    set: "06",
    stack: "full stack",
  },
  {
    id: 1,
    name: "Judith",
    set: "06",
    stack: "full stack",
  },
];

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server up and running",
    data: CodelabData,
  });
});

//Get method
app.get("/student", (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      message: "Student data created",
      data: CodelabData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error Ocurred ",
      data: error,
    });
  }
});

//Post
app.get("/oneStudent:id",(req:Request,res:Response)=>{
    const id = parseInt(req.params.CodelabData)
})


app.listen(PORT, () => {
  console.log("Server is up and running");
});
