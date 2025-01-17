const express = require('express');
const router = express.Router();

router.get('/:language', async (req, res) => {
    const { language } = req.params;

    // Validate the language parameter
    if (!['en', 'de'].includes(language)) {
        console.warn(`Invalid language parameter received: ${language}`);
        return res.status(400).json({ message: 'Invalid language. Please use "en" or "de".' });
    }

    // Check if req.pool is initialized
    if (!req.pool || typeof req.pool.query !== 'function') {
        console.error('Database connection pool is not available.');
        return res.status(500).json({ message: 'Database connection error.' });
    }

    const query = 'SELECT * FROM newsletters WHERE language = ?';

    try {
        // Execute the query and return the results
        const [results] = await req.pool.query(query, [language]);
        res.status(200).json(results);
    } catch (err) {
        // Log the detailed error for debugging
        console.error('Error fetching newsletters from database:', err.message, err.stack);
        res.status(500).json({ message: 'Error fetching newsletters from the database.' });
    }
});

module.exports = router;
