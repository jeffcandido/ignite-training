const express = require('express');

const app = express();

app.use(express.json());

const courses = [
    "Engenharia de Telecomunicações",
    "Ciência da Computação",
    "História",
    "Música",
    "Nutrição",
    "Filosofia"
]

app.get("/courses", (_req, res) => {
    res.json(courses);
});

app.listen(3333);