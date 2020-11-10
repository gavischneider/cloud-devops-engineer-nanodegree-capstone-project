import express, { Application, Request, Response } from "express";

const randomSong = require("@chatandshare/random-song");

require("dotenv").config();

const app: Application = express();

const random = new randomSong(process.env.API_KEY);

// Home route
app.get("/", (req: Request, res: Response) => {
  res.send(
    "Welcome to my capstone project! To get a random song, go to the '/random' route."
  );
});

// Random song route
app.get("/random", async (req: Request, res: Response) => {
  try {
    const song = await random.song();
    console.log(song);
    res.send(song);
  } catch (error) {
    console.log(error);
  }
});
app.listen(8080, () => console.log("Server running on port 8080"));
