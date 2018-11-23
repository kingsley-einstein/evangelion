import Render from './_serve_views';
import path from 'path';

export class Entry {
    static bindViews(app) {
        Render.renderViews(app);
    }

    static useStatics(app, express) {
        app.use(express.static(path.join(__dirname, '../statics')));
    }
}