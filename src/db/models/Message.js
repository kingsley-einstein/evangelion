import { Schema } from 'mongoose';
import paginate from 'mongoose-paginate';

const MessageSchema = new Schema({
   
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        childPath: 'sentMessages'
    },
    recepient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        childPath: 'receivedMessages'
    },
    messageTexts: {
        type: [Schema.Types.ObjectId],
        ref: 'Text'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    isRead: {
        type: Boolean,
        default: false
    }
});

MessageSchema.plugin(paginate);

export default MessageSchema;