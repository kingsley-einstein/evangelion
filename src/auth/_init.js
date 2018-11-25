import { ExtractJwt, Strategy } from 'passport-jwt';
import passport from 'passport';
import { secret } from '../environment';
import { _User } from '../db/config/_attach_properties';

export const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

const strategy = new Strategy(jwtOpts, (jwt_payload, next) => {
    _User
    .findById(jwt_payload.id)
    .then((user) => next(null, user))
    .catch((rejected) => next(null, false));
});

passport.use(strategy);

export const opts = {
    passport: passport
};