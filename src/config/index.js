import Render from './_serve_views';
import UseMiddlewares from './_use_middlewares';
import ServeData from './_serve_data';
import path from 'path';

export class Entry {
    static bindViews(app) {
        Render.renderViews(app);
    }

    static useMiddleWares(app) {
        UseMiddlewares.use(app);
    }

    static attachEndpoints(app) {
        ServeData.attachEndpoints(app);
    }

    static useStatics(app, express) {
        const opts = {
            setHeaders: (res, loc, stat) => {
                res.set('Service-Worker-Allowed', '/');
            }
        };
        app.use(express.static(path.join(__dirname, '../statics'), opts));
    }
}