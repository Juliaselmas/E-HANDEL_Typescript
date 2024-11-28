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

app.get("/items", async (req, res) => {
  try {
    const response = await fetch(`${baseUrl}`); // BASE_URL ska vara http://localhost:5006/items
    if (!response.ok)
      throw new Error(`Failed to fetch items: ${response.statusText}`);

    const data = await response.json();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in /items:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const items = await fetch("http://localhost:5006/items").then((res) =>
      res.json()
    );
    const item = items.find((item) => String(item.id) === id);

    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }

    res.status(200).json({ success: true, data: item });
  } catch (error) {
    console.error("Error in /items/:id:", error.message);
    res.status(500).json({ success: false, message: error.message });
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

/*
app.get("/items", async (req, res) => {
  console.log("BASE URL is:", baseUrl);
  try {
    const response = await fetch(`${baseUrl}`);
    if (!response.ok) {
      console.error(
        `Error fetching data from ${baseUrl}:`,
        response.statusText
      );
      throw new Error("Failed to fetch items from JSON server");
    }
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});
 */

/*FELMEDDELANDE??
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to the homepage!" });
});

app.get("/items", async (req, res) => {
  try {
    const response = await fetch(`${baseUrl}`);
    if (!response.ok) throw new Error("Failed to fetch items from JSON server");
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error("Error fetching items:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});
*/
