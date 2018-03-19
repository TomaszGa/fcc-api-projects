import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("running on port 3000");
});

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/:date", (req, res) => {
  res.json(generateResponse(req.params.date));
});

const generateResponse = input => {
  let unix = null;
  let natural = null;

  return {
    unix,
    natural
  };
};
