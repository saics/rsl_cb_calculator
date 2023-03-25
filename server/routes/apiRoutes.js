const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/raidDatabase";

router.get("/champions", async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db("raidDatabase");
    const champions = database.collection("champions");

    const allChampions = await champions.findOne({}, { projection: { _id: 0, champions: 1 } });
    res.json(allChampions.champions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching champions data." });
  } finally {
    await client.close();
  }
});

module.exports = router;
