import { Schema } from 'mongoose';

class Picture {

    static pictureSchema() {
        return new Schema({
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
        })
    }
}

export default Picture;