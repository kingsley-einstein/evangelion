import { Schema } from 'mongoose';
import paginate from 'mongoose-paginate';

const PostSchema = new Schema({
    
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
});

PostSchema.plugin(paginate);

export default PostSchema;