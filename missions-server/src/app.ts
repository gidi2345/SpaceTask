import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/createMission', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
