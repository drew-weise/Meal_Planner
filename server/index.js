import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/ingredients", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Chicken Breast",
      baseUnit: "g",
      nutritionReferenceAmount: 100,
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
    },
    {
      id: 2,
      name: "Rice",
      baseUnit: "g",
      nutritionReferenceAmount: 100,
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
    },
  ]);
});

app.post("/api/ingredients", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    success: true,
    ingredient: req.body,
  });
});

app.listen(5174, () => {
  console.log("Backend running on http://localhost:5174");
});