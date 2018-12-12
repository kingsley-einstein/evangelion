import UserQuery from '../db/queries/_user_query';
import PostQuery from '../db/queries/_post_query';
import PictureQuery from '../db/queries/_picture_query';
import MessageQuery from '../db/queries/_message_query';
import CommentQuery from '../db/queries/_comment_query';
import { opts } from '../auth/_init';

class ServeData {

    static attachEndpoints(app) {
        app.post('/users/register', UserQuery.create);
        app.post('/users/login', UserQuery.logUserIn);
        app.put('/users/logout', opts.passport.authenticate('jwt', {session: false}), UserQuery.logUserOut);
        app.get('/users', opts.passport.authenticate('jwt', {session: false}), UserQuery.findUser);
        app.get('/users/all', opts.passport.authenticate('jwt', {session: false}), UserQuery.findAllUsers);
        app.post('/posts', opts.passport.authenticate('jwt', {session: false}), PostQuery.createNew);
        app.get('/posts', opts.passport.authenticate('jwt', {session: false}), PostQuery.findAll);
        app.get('/posts/specific', opts.passport.authenticate('jwt', {session: false}), PostQuery.findOne);
        app.put('/posts/specific', opts.passport.authenticate('jwt', {session: false}), PostQuery.edit);
        app.delete('/posts/specific', opts.passport.authenticate('jwt', {session: false}), PostQuery.delete);
        app.post('/pictures', opts.passport.authenticate('jwt', {session: false}), PictureQuery.create);
        app.get('/pictures', opts.passport.authenticate('jwt', {session: false}), PictureQuery.findOne);
        app.get('/pictures/authors', opts.passport.authenticate('jwt', {session: false}), PictureQuery.findAllByOwner);
        app.delete('/pictures', opts.passport.authenticate('jwt', {session: false}), PictureQuery.delete);
        app.post('/messages', opts.passport.authenticate('jwt', {session: false}), MessageQuery.create);
        app.get('/messages', opts.passport.authenticate('jwt', {session: false}), MessageQuery.findAllByRecepient);
        app.get('/messages/sent', opts.passport.authenticate('jwt', {session: false}), MessageQuery.findAllByAuthor);
        app.delete('/messages', opts.passport.authenticate('jwt', {session: false}), MessageQuery.delete);
        app.delete('/messages/all', opts.passport.authenticate('jwt', {session: false}), MessageQuery.deleteAllByUser);
        app.post('/posts/comments', opts.passport.authenticate('jwt', {session: false}), CommentQuery.create);
        app.get('/posts/comments', opts.passport.authenticate('jwt', {session: false}), CommentQuery.findAllByPost);
        app.put('/posts/comments', opts.passport.authenticate('jwt', {session: false}), CommentQuery.edit);
        app.delete('/posts/comments', opts.passport.authenticate('jwt', {session: false}), CommentQuery.delete);
    }
}

export default ServeData;