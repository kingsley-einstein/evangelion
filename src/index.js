//require('dotenv').config();

import express from 'express';
import path from 'path';
import { mongo_uri_for_dev, mongo_uri_for_prod } from './environment'
import { Entry } from './config';
import RunServer from './runserver';
import RunMongoose from './runmongoose';

const app = express();

app.set('port', 9000);

app.set('env', 'development');

Entry.useMiddleWares(app);

Entry.attachEndpoints(app);

Entry.useStatics(app, express);

Entry.bindViews(app);

RunMongoose.run(app, mongo_uri_for_dev, mongo_uri_for_prod);

RunServer.run(app);