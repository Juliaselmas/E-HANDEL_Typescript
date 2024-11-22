import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//globala variabler
const PORT = process.env.PORT || 5010;
const baseUrl = process.env.BASE_URL;

const app = express();

//middlevare
app.use(cors());
app.use(express.json());

//"/items"?
app.get("/", async (req, res) => {
  const url = `${baseUrl}`;
  const response = await fetch("http://localhost:5006/items");

  if (response.ok) {
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  }
});

app.get("/:id", async (req, res) => {
  /*
     const param = req.params.id;
     const url = `${baseUrl}/${param}`;
     const response = await fetch(url);
     const response = await fetch(`http://localhost:5006/items/${param}`);
    */
  const param = req.params.id;
  const response = await fetch("http://localhost:5006/items");

  if (response.ok) {
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  }
});

//metod för att kunna lägga till produkter i varukorg??
app.post("/", async (req, res) => {
  const newItem = req.body;

  const response = await fetch("http://localhost:5006/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });

  res.status(201).json({ success: true, data: newItem });
});

//startar upp server & lyssnar på anrop
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
