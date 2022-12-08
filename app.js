if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();
const port =  process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));
app.use(require("./middlewares/error-handler"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
