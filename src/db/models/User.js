import { Schema } from 'mongoose';
import paginate from 'mongoose-paginate';

const UserSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        match: /([a-zA-Z]+|[0-9]+)(@)(\w+)(.com|.co.uk|.net)/
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    pictures: {
        type: [Schema.Types.ObjectId],
        ref: 'Picture'
    },
    profilePic: {
        type: Schema.Types.ObjectId,
        ref: 'Picture'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    posts: {
        type: [Schema.Types.ObjectId],
        ref: 'Post'
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: 'Comment'
    },
    texts: {
        type: [Schema.Types.ObjectId],
        ref: 'Text'
    },
    receivedMessages: {
        type: [Schema.Types.ObjectId],
        ref: 'Message'
    },
    sentMessages: {
        type: [Schema.Types.ObjectId],
        ref: 'Message'
    }
});

UserSchema.plugin(paginate);

export default UserSchema;