const Express = require('express');
const path = require('path');
const http = require('http');
const bodyparser = require('body-parser');
const fs = require('fs');
const docx = require("docx");
const docxConverter = require('docx-pdf');
const cors = require('cors');
const word = require('./word');
const { default: jsPDF } = require('jspdf');

const app = new Express();
const link = "http://localhost:80/";

let name = "";
let sName = "";
let pdfFileName="pppddff";

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
    // let fileName = "/" + name + ".pdf";
    let fileName = "/" + pdfFileName + ".pdf";
    console.log(fileName);
    return res.sendFile(path.join(pdffolder, fileName));
})


app.post("/lol", (req, res) => {
    const nam = req.body.formData;
    console.log(nam);
    word.generatePdf(nam);
    res.send(
        JSON.stringify({
            downloadLink: filelink,
        },
        )
    )
    //generateWordDocument(res, nam);
})

app.get("*", (req, res) => {
    res.send("Wrong place kiddo");
})

const PORT = process.env.PORT || 80;

http.createServer(app).listen(PORT, () => {
    console.log("Server is running at :" + PORT);
})


function generateWordDocument(res, nam) {

    if ((nam.middlename).trim() == "") {
        name = (nam.firstname).trim() + "_" + (nam.lastname).trim();
        sName = (nam.firstname).trim() + " " + (nam.lastname).trim();
    }
    else {
        name = (nam.firstname).trim() + "_" + (nam.middlename).trim() + "_" + (nam.lastname).trim();
        sName = (nam.firstname).trim() + " " + (nam.middlename).trim() + " " + (nam.lastname).trim();
    }
    
    const doc = word.generateWordDocument(docx,nam,sName);

    let fileName = name + ".docx";
    let filePath = "/word/" + fileName;
    let initialPath = path.join(__dirname, filePath);
    console.log(initialPath);
    docx.Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync(initialPath, buffer);
        fs.readFileSync(initialPath);
        console.log("checkpoint 1 passed");
        convertPdftoDocx(res, name);
    });
}

function convertPdftoDocx(res, name) {
    let fileNameDoc = "/word/" + name + ".docx";
    let fileNamePdf = "/pdf/" + name + ".pdf";
    let initialPath = path.join(__dirname, fileNameDoc);
    let uploadPath = path.join(__dirname, fileNamePdf);

    docxConverter(initialPath, uploadPath, function (err, result) {
        if (err) {
            console.log("FOUND A VERY BIG ERROR : " + err);
        }
        else {
            console.log("checkpoint 2 passed");
            pdfRender(res, name);
        }
    });
}

function pdfRender(res, name) {
    pdfName = name + ".pdf";
    console.log("checkpoint 3 passed");
    console.log("sending response to client");
    let filelink = link + "pdf";
    console.log(filelink);
    res.send(
        JSON.stringify({
            downloadLink: filelink,
        },
        )
    )
}