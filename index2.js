const express = require("express");
const multer = require("multer");
const app = express();
require("./config");

app.use(express.json());

const uploadData = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
}).single("file_name");

app.post("/upload", uploadData, (req, resp) => {
  resp.send("uploading");
});

app.listen(6000);
