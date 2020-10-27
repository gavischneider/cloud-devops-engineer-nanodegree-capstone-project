import express, {Application, Request, Response} from 'express';

const randomSong = require('@chatandshare/random-song');

require('dotenv').config();

const app: Application = express();

const random = new randomSong(process.env.API_KEY);

// Home route
app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to my capstone project! To get a random song, go to the '/random' route.");
});

// Random song route
app.get('/random', async (req: Request, res: Response) => {
 
    let randomSong = await random.song();
        
    console.log(randomSong);
    res.send(randomSong);
    
})

app.listen(8080, () => console.log('Server running on port 8080'));