const express = require('express');
const router = express.Router();

router.get('/:language', async (req, res) => {
    const { language } = req.params;

    if (!['en', 'de'].includes(language)) {
        return res.status(400).json({ message: 'Invalid language. Please use "en" or "de".' });
    }

    const query = 'SELECT * FROM pdfs WHERE language = ?';

    try {
        const [results] = await req.pool.query(query, [language]);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching PDFs from database:', err);
        res.status(500).json({ message: 'Error fetching PDFs' });
    }
});

module.exports = router;
