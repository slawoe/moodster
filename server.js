require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 3001;
const app = express();
const { initDatabase } = require("./lib/database");

const users = require("./lib/routes/users");
const diary = require("./lib/routes/diary");
const doctors = require("./lib/routes/doctors");
const medics = require("./lib/routes/medics");

app.use(express.json());

app.use("/api/users", users);
app.use("/api/diary", diary);
app.use("/api/doctors", doctors);
app.use("/api/medics", medics);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

initDatabase(process.env.MONGO_URI, process.env.MONGO_DB).then(async () => {
  console.log(`Database ${process.env.MONGO_DB} is ready`);
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
