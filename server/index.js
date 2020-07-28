import 'regenerator-runtime';
import path from 'path';
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

import routes from './routes';
import expressErroHandle from './error';
import db from './db/models';

config();

const app = express();

if(process.env.NODE_ENV === 'development') app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/v1', routes);

const port = 8080;

app.use(express.static(path.resolve(__dirname, '../public')))
app.get('/', (req, res) => {
    console.log('here')
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
});

app.all('*', (req, res) => {
    return res.status(404).json({
        message: 'route does not exist',
        status: 404
    })
})
app.use(expressErroHandle);
// db.sequelize.sync();

app.listen(port, () => console.log('server started'));
