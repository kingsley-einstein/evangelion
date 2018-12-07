import mongoose from 'mongoose';

class RunMongoose {
    
    static run(app, dev_uri, prod_uri) {
        mongoose.connect(app.get('env') === 'development' ? dev_uri : prod_uri, {useNewUrlParser: true}, (err) => {
            if (err) throw err;

            console.log('Mongoose connected');
        });
    }
}

export default RunMongoose;