import React, { useState, useEffect } from 'react';
import "../style/index.css";

const Dashboard = () => {
    const [title, setTitle] = useState('');
    const [language, setLanguage] = useState('en'); // State for selected language
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [pdfs, setPdfs] = useState([]); // To store the fetched PDFs
    const [currentLanguage, setCurrentLanguage] = useState('en'); // State for filtering by language

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('language', language); // Append selected language
        formData.append('pdf', file);

        try {
            const response = await fetch('https://api.guesthouses.top/api/upload-pdf', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setMessage('PDF uploaded successfully!');
                fetchPdfs(); // Refresh the list after uploading
            } else {
                setMessage('Error uploading PDF.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error uploading PDF.');
        }
    };

    const fetchPdfs = async () => {
        try {
            const response = await fetch(`https://api.guesthouses.top/api/pdfs/${currentLanguage}`);
            if (response.ok) {
                const data = await response.json();
                setPdfs(data); // Set PDFs in state
            } else {
                console.error('Error fetching PDFs');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const deletePdf = async (id) => {
        try {
            const response = await fetch(`https://api.guesthouses.top/api/delete-pdf/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setMessage('PDF deleted successfully!');
                fetchPdfs();  // Refresh the list after deletion
            } else {
                setMessage('Error deleting PDF.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error deleting PDF.');
        }
    };

    // Fetch PDFs when the component mounts or language changes
    useEffect(() => {
        fetchPdfs();
    }, [currentLanguage]);

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Upload a PDF</h2>
            <form onSubmit={handleFileUpload}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Language:</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        required
                    >
                        <option value="en">English</option>
                        <option value="de">German</option>
                    </select>
                </div>
                <div>
                    <label>PDF File:</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}

            <div>
                <h3>Uploaded PDFs</h3>
                <div>
                    <label>Filter by Language:</label>
                    <select
                        value={currentLanguage}
                        onChange={(e) => setCurrentLanguage(e.target.value)}
                    >
                        <option value="en">English</option>
                        <option value="de">German</option>
                    </select>
                </div>
                <ul>
                    {pdfs.map((pdf) => (
                        <li key={pdf.id}>
                            <p>{pdf.title}</p>
                            <a
                                href={`https://api.guesthouses.top/${pdf.path}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View PDF
                            </a>
                            <button onClick={() => deletePdf(pdf.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
