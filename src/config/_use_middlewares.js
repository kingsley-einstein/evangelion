import { opts } from '../auth/_init';
import bodyParser, { json } from 'body-parser';
import morgan from 'morgan';

class UseMiddlewares {

    static use(app) {
        app.use(opts.passport.initialize());
        app.use(bodyParser({extended: false}));
        app.use(json());
        app.use(morgan('dev'));
    }
}

export default UseMiddlewares;