import React, { useState } from 'react';
import './image.css'
function App() {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({ text: '', image: '', link: '' });

    // Loading notes from local storage when the component mounts
    React.useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    // Saving notes to local storage when the notes state changes
    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const handleNoteChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleImageChange = e => {
        setNote({ ...note, image: URL.createObjectURL(e.target.files[0]) })
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        setNotes([...notes, note]);
        setNote({ text: '', image: '', link: '' });
    };

    const handleDeleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    };

    return (
        <div>
            <h1>Take notes with images and links</h1>
            <form onSubmit={handleAddNote}>
                <textarea name="text" value={note.text} onChange={handleNoteChange} placeholder="Enter your note here"></textarea>
                <input type="file" name="image" onChange={handleImageChange} />
                <input type="text" name="link" value={note.link} onChange={handleNoteChange} placeholder="Enter link here"></input>
                <button type="submit">Save</button>
            </form>
            {notes.map((note, index) => (
                <div key={index}>
                    <p>{note.text}</p>
                    <img src={note.image} alt="note" />
                    <a href={note.link}>{note.link}</a>
                    <button onClick={() => handleDeleteNote(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default App;
