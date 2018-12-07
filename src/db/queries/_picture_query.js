import { _Picture } from '../config/_attach_properties';
import formidable from 'formidable';

class PictureQuery {

    static create(req, res) {
        let form = new formidable.IncomingForm();

        form.parse(req, (error, fields, files) => {
            try {
                console.log(files);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }

    static findAllByOwner(req, res) {
        _Picture.paginate({owner: req.query.owner}, {page: req.query.page, limit: 20})
                .then((result) => res.status(200).json(result))
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static findOne(req, res) {
        _Picture.findById(req.query.id)
                .then((result) => res.status(200).json(result))
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static delete(req, res) {
        _Picture.findByIdAndDelete(req.query.id)
                .then((result) => res.status(200).json({message: `Picture with id ${result._id} deleted`}))
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }
}

export default PictureQuery;