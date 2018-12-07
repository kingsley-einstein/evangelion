import { Schema } from 'mongoose';
import paginate from 'mongoose-paginate';

const CommentSchema = new Schema({
    
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
});

CommentSchema.plugin(paginate);

export default CommentSchema;