const express = require("express");

const app = express();

app.use(express.json());

const courses = [
  "Engenharia de Telecomunicações",
  "Ciência da Computação",
  "História",
  "Música",
  "Nutrição",
  "Filosofia",
];

app.get("/courses", (_req, res) => {
  res.json(courses);
});

app.post("/courses", (req, res) => {
  const { course } = req.body;

  courses.push(course);

  res.json(courses);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  const { new_course } = req.body;

  courses[id] = new_course;

  res.json(courses);
});

app.delete("/courses/:id", (req, res) => {
  const { id } = req.params;

  courses.splice(id, 1);

  res.json(courses);
});

app.listen(3333);
