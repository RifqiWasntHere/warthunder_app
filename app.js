const express = require("express");
const router = require("./routers");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.listen(3001, () => {
  console.log("server has started on port 3001");
});
