import UserSchema from '../models/User';
import PictureSchema from '../models/Picture';
import PostSchema from '../models/Post';
import CommentSchema from '../models/Comment';
import MessageSchema from '../models/Message';
import TextSchema from '../models/Text';
import mongoose from 'mongoose';

export const _User = mongoose.model('User', UserSchema);
export const _Picture = mongoose.model('Picture', PictureSchema);
export const _Post = mongoose.model('Post', PostSchema);
export const _Comment = mongoose.model('Comment', CommentSchema);
export const _Message = mongoose.model('Message', MessageSchema);
export const _Text = mongoose.model('Text', TextSchema);