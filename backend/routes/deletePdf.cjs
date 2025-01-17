const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM newsletters WHERE id = ?";

    try {

        const [rows] = await req.pool.query(query, [id]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "newsletter not found" });
        }

        const pdf = rows[0];
        const filePath = path.join(__dirname, '..', pdf.path);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting newsletter file:', err);
                return res.status(500).json({ error: 'Error deleting newsletter file', details: err.message });
            }

            const deleteQuery = "DELETE FROM newsletters WHERE id = ?";
            req.pool.query(deleteQuery, [id], (err, results) => {
                if (err) {
                    console.error('Error deleting PDF from database:', err);
                    return res.status(500).json({ error: "Error deleting newsletter from database", details: err.message });
                }

                if (results.affectedRows === 0) {
                    return res.status(404).json({ message: "newsletter not found" });
                }

                res.status(200).json({ message: "newsletter deleted successfully" });
            });
        });
    } catch (err) {
        console.error('Error in deletePdf route:', err);
        res.status(500).json({ error: 'Error deleting newsletter', details: err.message });
    }
});

module.exports = router;
