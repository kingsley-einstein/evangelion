import path from 'path';

class Render {
    static renderViews(app) {
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../index.html'));
        });

        app.get('/dashboard', (req, res) => {
            res.sendFile(path.join(__dirname, '../views/dashboard.html'));
        });
    }
}

export default Render;