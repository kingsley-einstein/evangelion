import { Schema } from 'mongoose';

class Post {

    static postSchema() {
        return new Schema({
            title: {
                type: String,
                required: true,
                minlength: 8
            },
            content: {
                type: String,
                required: true,
                minlength: 9
            },
            author: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            comments: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Comment'
                }
            ],
            date: {
                type: Date,
                default: Date.now()
            }
        })
    }
}

export default Post;