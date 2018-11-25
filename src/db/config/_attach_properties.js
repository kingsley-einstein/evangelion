import User from '../models/User';
import Picture from '../models/Picture';
import Post from '../models/Post';
import Comment from '../models/Comment';
import bcrypt from 'bcrypt';
import paginate from 'mongoose-paginate';
import mongoose from 'mongoose';

User.userSchema().method('checkPassword', function(password, encrypted) {
    return bcrypt.compareSync(password, encrypted);
});

Picture.pictureSchema().method('edit', function(mimeType, data) {
    this.mimeType = mimeType;
    this.data = data;
});

Post.postSchema().method('edit', function(title, content) {
    this.title = title;
    this.content = content;
});

Comment.commentSchema().method('edit', function(comment) {
    this.content = comment;
});

User.userSchema().plugin(paginate);
Picture.pictureSchema().plugin(paginate);
Post.postSchema().plugin(paginate);
Comment.commentSchema().plugin(paginate);

export const _User = mongoose.model('User', User.userSchema());
export const _Picture = mongoose.model('Picture', Picture.pictureSchema());
export const _Post = mongoose.model('Post', Post.postSchema());
export const _Comment = mongoose.model('Comment', Comment.commentSchema());