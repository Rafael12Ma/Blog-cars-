import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "cars",
  password: "2002",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let cars = [{ id: 1, marka: "bmw", montelo: "m3" }];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM car ORDER BY id ASC");
    cars = result.rows;

    res.render("index.ejs", {
      listTitle: "Today",
      carInputs: cars,
    });
  } catch (err) {
    console.log(err);
  }
});

app.use(express.static("public"));

app.get("/read", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM car ORDER BY id  ASC");
    cars = result.rows;

    res.render("read.ejs", {
      carKind: cars,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/read", async (req, res) => {
  const marka = req.body["onomacar"];
  const montelo = req.body["montelo"];
  console.log(marka, montelo);
  //   cars.push({ marka: marka });

  //   const item = req.body.newItem;
  try {
    await db.query("INSERT INTO car (marka,montelo) VALUES ($1,$2)", [
      marka,
      montelo,
    ]);
  } catch (err) {
    console.log(err);
  }
  res.render("read.ejs", { montelo: montelo, marka: marka });
});



// app.post("/submit2", async (req, res) => {
//     const marka = req.body.;
//     const montelo = req.body["montelo"];
//     console.log(marka, montelo);
//     //   cars.push({ marka: marka });
  
//     //   const item = req.body.newItem;
//     try {
//       await db.query("INSERT INTO car (marka,montelo) VALUES ($1,$2)", [
//         marka,
//         montelo,
//       ]);
//     } catch (err) {
//       console.log(err);
//     }
//     res.render("read.ejs", { montelo: montelo, marka: marka });
//   });




app.get("/write", (req, res) => {
  res.render("write.ejs");
});

app.get("/bmwM3", (req, res) => {
  res.render("bmwM3.ejs");
});
app.get("/MercedesGts", (req, res) => {
  res.render("MercedesGts.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// Twra to mono pou thelw na entaksw ston
// kwdika moy kai den to exw mathei akoma
// // einai pws dhmioyrgw kainouria app.get me 
// /onoma tis eggrafes tou pinaka kai na valw 
// ws periexomeno mesa thn perigrafi tou kathe
// amaksiou
