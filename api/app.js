import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express server!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
