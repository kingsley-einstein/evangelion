import { Schema } from 'mongoose';

class Comment {
    
    static commentSchema() {
        return new Schema({
            author: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            content: {
                type: String,
                required: true,
                minlength: 8
            },
            post: {
                type: Schema.Types.ObjectId,
                ref: 'Post',
                select: false
            },
            date: {
                type: Date,
                default: Date.now()
            }
        })
    }
}

export default Comment;