const multer = require('multer');

const fileUpload = (req, res, next) => {

    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './server/uploads')
        },
        filename: (req, file, cb) => {

            let filename = file.fieldname + '-' + Date.now();
            let arrExt = file.originalname.split('.');
            let ext = arrExt[arrExt.length - 1];

            filename += `.${ext}`;
            req.filename = filename;

            cb(null, req.filename)
        },
        onError: (err) => {
            console.log("ERROR!!!");
        }
    });

    const upload = multer({ storage }).single('file');
    upload(req, res, (err) => {
        if (err) {
            return res.json({
                ok: false,
                err: "Error subiendo el archivo"
            });
        }
        next();
    });

}


module.exports = fileUpload;