import express from 'express';
import path from 'path';
import { Entry } from './config';
import RunServer from './runserver';

const app = express();

app.set('port', 9000);

Entry.useStatics(app, express);

Entry.bindViews(app);

RunServer.run(app);