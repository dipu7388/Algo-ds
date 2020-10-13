// export class C {
//     private x = 10;
//     private y=15;
//     getX = () => this.x;
//     setX = (newVal: number) => { this.x = newVal; }
// }

// export let x = new C();
// export let y = { ...{ some: "value" } };
import express from 'express';
import chalk from 'chalk';
import  Debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import {join} from 'path';
import cors from 'cors'
import  fs from 'fs'

const app = express();
const debug= Debug("App");
const port: string =( process.env.PORT || 3000) as string;
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'library' }));
app.use(cors());


app.use(express.static(path.join(__dirname, '/assets/')));
const DIST_FOLDER = join(process.cwd(), 'dist');
app.get('*.*', express.static( DIST_FOLDER, {
  maxAge: '1y'
}));






app.get("/", function(req, res) {
      console.log(
      chalk.red(DIST_FOLDER)
    );

    res.send('Hello').status(200);
  });



app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});




