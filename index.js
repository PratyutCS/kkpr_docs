const Express = require('express');
const path = require('path');
const http = require('http');
const bodyparser = require('body-parser');
const cors = require('cors');
const word = require('./word');

const app = new Express();
const link = "http://localhost:80/";

let name = "";
let sName = "";
// let pdfFileName="pppddff";

let pdffolder = path.join(__dirname, "/pdf");
app.use(Express.static(__dirname + '/pdf'));

app.use(cors());
app.options('*', cors());

// app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


app.get("/", (req, res) => {
    return res.send("WELCOME");
})

app.get("/pdf", (req, res) => {
    let fileName = "/" + name + ".pdf";
    // let fileName = "/" + pdfFileName + ".pdf";
    // console.log(fileName);
    return res.sendFile(path.join(pdffolder, fileName));
})


app.post("/lol", (req, res) => {
    const nam = req.body.formData;
    // console.log(nam);
    if ((nam.middlename).trim() == "") {
        name = (nam.firstname).trim() + "_" + (nam.lastname).trim();
        sName = (nam.firstname).trim() + " " + (nam.lastname).trim();
    }
    else {
        name = (nam.firstname).trim() + "_" + (nam.middlename).trim() + "_" + (nam.lastname).trim();
        sName = (nam.firstname).trim() + " " + (nam.middlename).trim() + " " + (nam.lastname).trim();
    }
    word.generatePdf(res,nam,link,sName,name);
})

app.get("*", (req, res) => {
    res.send("Wrong place kiddo");
})

const PORT = process.env.PORT || 80;

http.createServer(app).listen(PORT, () => {
    console.log("Server is running at :" + PORT);
})