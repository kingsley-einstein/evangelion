import path from 'path';

class Render {
    static renderViews(app) {
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../index.html'));
        });
    }
}

export default Render;