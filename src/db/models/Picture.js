import { Schema } from 'mongoose';
import paginate from 'mongoose-paginate';

const PictureSchema = new Schema({
    
    caption: String,
    data: String,
    mimeType: String,
    dateUploaded: {
        type: Date,
        default: Date.now()
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        childPath: 'pictures'
    }
});

PictureSchema.plugin(paginate);

export default PictureSchema;