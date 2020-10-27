import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Welcome to my capstone project");
});

app.listen(5000, () => console.log('Server running on port 5000'));