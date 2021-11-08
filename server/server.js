const express = require("express");
const app = express();
const test = require("./Router/test");
const router = express.Router();

app.use("/api", test);

const port = 5000;   // 노드서버가 사용할 포트번호
app.listen(port, () => console.log(`listening port ${port}`));