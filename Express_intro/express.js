const express = require("express");
const PORT = 3022;
const app = express();

app.use(express.json());

let judithStudents = [
  { id: 1, name: "Judith", grade: 15, stack: "javaScript" },
  { id: 2, name: "Temmy", grade: 18, stack: "node.js" },
  { id: 3, name: "Precious", grade: 17, stack: "element.ts" },
  { id: 4, name: "Johnny", grade: 18, stack: "react" },
];

// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "Server is up and running",
//   });
// });

app.get("/student", (req, res) => {
  try {
    res.status(200).json({
      message: "Data gotten Sucessfully",
      data: judithStudents,
    });
  } catch (error) {
    res.status(404).json({
      message: `An Error Occoures: \t ${error}`,
    });
  }
});

app.get("/getStudent/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = studentData.find((stud) => stud.id === id);

    if (id) {
      res.status(200).json({
        message: `user ${id} is Found`,
        data: student,
      });
    } else {
      res.status(404).json({
        message: `user ${id} Not Found`,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: `An Error Occoures: \t ${error}`,
    });
  }
});

//post method
app.post("/newStudent", (req, res) => {
  try {
    const createStudent = {
      id: studentData.length + 1,
      name: req.body.name,
      stack: req.body.stack,
      grade: req.body.grade,
    };

    studentData.push(createStudent);
    res.status(201).json({
      message: "Data Created Sucessfully",
      data: studentData,
    });
  } catch (error) {
    res.status(404).json({
      message: `Page Not Found: \t ${error}`,
    });
  }
});

app.patch("/updateStudent/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = studentData.find((stud) => stud.id === id);

    student.id = student.id;
    student.name = req.body.name;
    student.stack = req.body.stack;
    student.grade = req.body.grade;

    res.status(200).json({
      message: "Updated Sucessfully",
      data: student,
    });
  } catch (error) {
    res.status(404).json({
      message: `Page Not Found: \t ${error}`,
    });
  }
});

app.delete("/deleteStudent/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = studentData.find((stud) => stud.id === id);

    const index = studentData.indexOf(student);
    studentData.splice(index, 1);

    res.status(200).json({
      message: "Student Has Been Deleted sucessfully",
    });
  } catch (error) {
    res.status(404).json({
      message: `Couldn't Perform Operation: \t ${error}`,
    });
  }
});

app.listen(PORT, () => {
  console.log("Sever is listening");
});
