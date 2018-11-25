import { Schema } from 'mongoose';

class User {
    
    static userSchema() {
        return new Schema({
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
            isActive: Boolean,
            posts: {
                type: [Schema.Types.ObjectId],
                ref: 'Post',
                select: false
            },
            comments: {
                type: [Schema.Types.ObjectId],
                ref: 'Comment',
                select: false
            }
        });
    }
}

export default User;