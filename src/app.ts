import express, {Application, Request, Response, NextFunction} from 'express';
// import randomSong from '@chatandshare/random-song';
const randomSong = require('@chatandshare/random-song');

const app: Application = express();

const random = new randomSong("5a6a3319d10b8dd4593f110d6db57172");

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Welcome to my capstone project!");
});

app.get('/random', async (req: Request, res: Response, next: NextFunction) => {
    
 
    let very_random_song = await random.song();
        
    console.log(very_random_song); // Outputs a random song
    res.send(very_random_song);
    
})

app.listen(8080, () => console.log('Server running on port 8080'));