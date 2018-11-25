import { _User } from '../config/_attach_properties';
import bcrypt from 'bcrypt';
import { jwtOpts } from '../../auth/_init';
import jwt from 'jsonwebtoken';

class UserQuery {

    static create(req, res) {
        _User.create({
            email: req.body.email,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12)),
            isActive: false
        })
        .then((user) => {
            user.save()
            res.status(200).json({
                message: 'New user registered'
            });
        })
        .catch((err) => res.status(500).json(err));
    }

    static logUserIn(req, res) {
        _User.findOne({email: req.body.email}, {}, {})
             .then((user) => {
                 if (bcrypt.compareSync(req.body.password, user.password)) {
                     const payload = {id: user._id, password: user.password};
                     const token = jwt.sign(payload, jwtOpts.secretOrKey, {expiresIn: '10d'});

                     res.status(200).json({
                         user: user,
                         token: token
                     });
                 }
                 else {
                     res.status(500).json({
                         message: 'Incorrect password'
                     });
                 }
             })
    }

    static findUser(req, res) {
        _User.findById(req.query.id)
             .then((user) => res.status(200).json(user))
             .catch((rejected) => res.status(rejected.status).json(rejected));
    }
}

export default UserQuery;