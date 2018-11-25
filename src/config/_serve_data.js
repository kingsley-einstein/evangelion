import UserQuery from '../db/queries/_user_query';
import { opts } from '../auth/_init';

class ServeData {

    static attachEndpoints(app) {
        app.post('/register', UserQuery.create);
        app.post('/login', UserQuery.logUserIn);
        app.get('/dashboard', opts.passport.authenticate('jwt', {session: false}), UserQuery.findUser);
    }
}

export default ServeData;