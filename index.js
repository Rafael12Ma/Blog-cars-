import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
import { emitWarning } from "process";
const __dirname=dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use(express.static("public"));

app.get("/read",(req,res)=>{
    res.render("read.ejs");
});

app.post("/submit",(req,res)=>{
   const marka= req.body["onomacar"];
   const desc=req.body["perigrafi"];
   res.render("read.ejs",{desc:desc,marka:marka});
   console.log(marka,desc);
});

app.get("/write",(req,res)=>{
    res.render("write.ejs");
});

app.get("/bmwM3",(req,res)=>{
    res.render("bmwM3.ejs");
});
app.get("/MercedesGts",(req,res)=>{
    res.render("MercedesGts.ejs")
})

app.get("/",(req,res)=>{
    console.log("HELLO WORLD!")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// Twra to mono pou thelw na entaksw ston 
// kwdika moy kai den to exw mathei akoma 
// einai pws dhmioyrgw asygxrwna ena neo 
// .ejs gia na mpainei mesa to oxhma xwris
// na xreiazetai na to dimiourgisw egw. Etsi 
// tha einai oloklirwmeno kai to mono pou tha
// xreiastei meta einai na kanw tin katalliles 
// allages sto CSS
