const express = require("express");
const PORT = 2000;

const app = express();

app.use(express.json());

const studentData = [
  {
    id: 1,
    name: "judith",
    stack: "fullStack",
    grad: 18,
  },

  {
    id: 2,
    name: "judith",
    stack: "fullStack",
    grad: 20,
  },

  {
    id: 3,
    name: "judith",
    stack: "fullStack",
    grad: 18,
  },

  {
    id: 4,
    name: "judith",
    stack: "fullStack",
    grad: 18,
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Server is up and Running");
});

//This is the Get method it is use to read
app.get("/students", (req, res) => {
  //   res.status(200).json({
  //     data: studentData,
  //   });

  try {
    res.status(200).json({
      message: "Data gotten succesfully",
      data: studentData,
    });
  } catch (error) {
    res.status(404).json({
      message: `An error occured: \t ${error} `,
    });
  }
});

//for single data
app.get("/getStudent/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const students = studentData.find((stud) => stud.id === id);

    if (id) {
      res.status(200).json({
        message: `user ${id} is found`,
        data: students,
      });
    } else {
      res.status(404).json({
        message: `user ${id} is  not found`,
      });
    }
  } catch (error) {
    res.status(404).json({
      messsage: `students with this ${id} not found`,
      data: null,
    });
  }
});

//post method creating
app.post("/newStudents", (req, res) => {
  try {
    const createStudents = {
      id: studentData.length + 1,
      name: req.body.name,
      stack: req.body.stack,
      grad: req.body.stack,
    };
    studentData.push(createStudents);
    res.status(201).json({
      message: "Data created Successfully",
      data: studentData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error creating new student data",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is listening");
});
