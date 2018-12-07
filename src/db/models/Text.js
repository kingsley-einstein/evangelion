import { Schema } from 'mongoose';
import paginate from 'mongoose-paginate';

const TextSchema = new Schema({
    
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
        select: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: true
    }
});

TextSchema.plugin(paginate);

export default TextSchema;