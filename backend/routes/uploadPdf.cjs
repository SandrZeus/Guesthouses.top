const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
}).single('pdf');

const allowedLanguages = ['en', 'de'];

const uploadPdfRoute = (pool) => {
    router.post('/', (req, res) => {
        upload(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ message: `Multer error: ${err.message}` });
            } else if (err) {
                return res.status(400).json({ message: err.message });
            }

            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }

            const { title, language } = req.body;
            const filePath = `uploads/${req.file.filename}`;

            if (!title) {
                return res.status(400).json({ message: 'Title is required' });
            }

            if (!language || !allowedLanguages.includes(language)) {
                return res
                    .status(400)
                    .json({ message: 'Invalid language. Allowed values are "en" or "de".' });
            }

            try {
                const query = 'INSERT INTO pdfs (title, path, language) VALUES (?, ?, ?)';
                const [result] = await pool.query(query, [title, filePath, language]);
                res.status(200).json({ message: 'PDF uploaded successfully', id: result.insertId });
            } catch (dbError) {
                console.error('Error inserting into database:', dbError);
                res.status(500).json({ message: 'Error saving PDF to database' });
            }
        });
    });

    return router;
};

module.exports = uploadPdfRoute;
