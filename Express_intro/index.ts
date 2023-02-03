import express, { Application, Request, Response } from "express";
const PORT: number = 2222;
const app: Application = express();
app.use(express.json());

interface Codelab {
  id: number;
  name: string;
  section: string;
  state: string;
}

const studentClass: Codelab[] = [
  { id: 1, name: "Judith", section: "2019 / 2020", state: "lagos" },
  { id: 2, name: "Tony", section: "2020 / 2021", state: "Imo" },
  { id: 3, name: "Favour", section: "2021 / 2022", state: "Cross river" },
  { id: 4, name: "Precious", section: "2022 / 2023", state: "Kano" },
  { id: 5, name: "John", section: "2023 / 2024", state: "Kogi" },
];

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server is up and running😎🌇🌇⛅😎",
  });
});

//GET method
app.get("/studentData", (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      message: "Data Gotten succesfully",
      data: studentClass,
    });
  } catch (error) {
    return res.status(200).json({
      message: "An error Ocurred",
      Data: error,
    });
  }
});

app.get("/getStudents/:studentID", (req: Request, res: Response): Response => {
  try {
    const id = parseInt(req.params.studentID);
    console.log(req.params);
    const Onestudent = studentClass.find((stud) => stud.id === id);

    if (Onestudent) {
      return res.status(200).json({
        message: "User found",
        Data: Onestudent,
      });
    } else {
      return res.status(400).json({
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "error occured",
    });
  }
});

//post method
app.post("/newStudent", (req: Request, res: Response): Response => {
  try {
    const Createstudent = {
      id: studentClass.length + 1,
      name: req.body.name,
      section: req.body.section,
      state: req.body.state,
    };

    studentClass.push(Createstudent);
    return res.status(201).json({
      message: "Data Successful Created",

      Data: studentClass,
    });
  } catch (error) {
    return res.status(404).json({
      message: `An error occured ${error}`,
    });
  }
});

//This is the patch method
app.patch("/update/:studentiD", (req: Request, res: Response): Response => {
  try {
    const id = parseInt(req.params.studentiD);
    const student: any = studentClass.find((s) => s.id === id);
    student.id = student.id;
    student.name = req.body.name;
    student.section = req.body.section;
    student.state = req.body.state;

    return res.status(200).json({
      message: "student updated",
      data: student,
    });
  } catch (error) {
    return res.status(404).json({
      message: "an error occured",

      data: error,
    });
  }
});

//THis is the delete method
app.delete("/deletestudent/:id", (req: Request, res: Response): Response => {
  try {
    const id = parseInt(req.params.id);
    const student: any = studentClass.find((stud) => stud.id === id);

    const index = studentClass.indexOf(student);
    studentClass.splice(index, 1);

    return res.status(200).json({
      message: "Student deleted",
      data: studentClass,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An error Occured",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
