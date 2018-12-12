import { _User } from '../config/_attach_properties';
import bcrypt from 'bcrypt';
import { jwtOpts } from '../../auth/_init';
import jwt from 'jsonwebtoken';

class UserQuery {

    static create(req, res) {
        _User.create({
            email: req.body.email,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12))
        })
        .then((value) => res.status(200).json(value))
        .catch((rejected) => res.status(500).json(rejected));
    }

    static logUserIn(req, res) {
        _User.findOneAndUpdate({email: req.body.email}, {isActive: true}, {})
             .then((response) => {
                 if (response) {
                    if (bcrypt.compareSync(req.body.password, response.password)) {
                        const payload = {id: response._id};
                        const token = jwt.sign(payload, jwtOpts.secretOrKey);
   
                        res.status(200).json({user: response, token: token});
                    }
                    else {
                        res.status(500).json({message: "Incorrect password"});
                    }
                 }
                 else {
                     res.status(404).json({message: "User not found"});
                     console.log(req.body);
                 }
             })
             .catch((rejected) => res.status(rejected.status || 500).json(rejected));
    }

    static findUser(req, res) {
        _User.findById(req.query.id, {}, {}, (err, result) => {
            _User.populate(result, {path: 'posts pictures profilePic comments receivedMessages sentMessages'})
                 .then((value) => res.status(200).json(value))
                 .catch((rejected) => res.status(rejected.status || 500).json(rejected));
        });
    }

    static findAllUsers(req, res) {
        _User.paginate({}, {page: req.query.page, limit: 10})
             .then((user) => {
                 res.status(200).json(user);
             })
             .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static logUserOut(req, res) {
        _User.findOneAndUpdate({id: req.query.id}, {isActive: false}, {})
             .then((response) => console.log(response))
             .catch((rejected) => console.log(rejected));
    }
}

export default UserQuery;