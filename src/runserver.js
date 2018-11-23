class RunServer {
   static run(app) {
        
    app.listen(app.get('port'), () => {
            console.log(`Server running on ${app.get('port')}`);
        });
    }
}

export default RunServer;