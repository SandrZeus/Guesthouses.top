const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM pdfs WHERE id = ?";

    try {

        const [rows] = await req.pool.query(query, [id]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "PDF not found" });
        }

        const pdf = rows[0];
        const filePath = path.join(__dirname, '..', pdf.path);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting PDF file:', err);
                return res.status(500).json({ error: 'Error deleting PDF file', details: err.message });
            }

            const deleteQuery = "DELETE FROM pdfs WHERE id = ?";
            req.pool.query(deleteQuery, [id], (err, results) => {
                if (err) {
                    console.error('Error deleting PDF from database:', err);
                    return res.status(500).json({ error: "Error deleting PDF from database", details: err.message });
                }

                if (results.affectedRows === 0) {
                    return res.status(404).json({ message: "PDF not found" });
                }

                res.status(200).json({ message: "PDF deleted successfully" });
            });
        });
    } catch (err) {
        console.error('Error in deletePdf route:', err);
        res.status(500).json({ error: 'Error deleting PDF', details: err.message });
    }
});

module.exports = router;
