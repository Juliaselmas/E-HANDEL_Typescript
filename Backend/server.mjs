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
  try {
    const response = await fetch(`${baseUrl}`);
    if (!response.ok) throw new Error("Failed to fetch items");
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const param = req.params.id;
    const response = await fetch(`${baseUrl}/${param}`);
    if (!response.ok) throw new Error("Failed to fetch item");
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
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
