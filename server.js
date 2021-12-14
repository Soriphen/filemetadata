var express = require("express");
var cors = require("cors");
require("dotenv").config();
let multer = require("multer");
var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

/* ------------------------------Functions------------------------------ */
function postUpload(req, res) {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
}

/* ------------------------------Main API------------------------------ */
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", multer().single("upfile"), postUpload);

/* ------------------------------Listener------------------------------ */
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
