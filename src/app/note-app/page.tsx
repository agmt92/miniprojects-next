"use client";

import Note from '../ui/components/Note.component';
import Button from '../ui/components/Button';
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

interface NoteType {
  id: string;
  content: string;
}

export default function Notes() {
    const [notes, setNotes] = useState<NoteType[]>([]);

    const addNewNote = () => {
        const newNote: NoteType = { id: uuidv4(), content: "" };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id: string) => {
        setNotes(notes.filter((note) => note.id !== id));
    }

    return (
        <div className='container'>
            <Button btnClass='btn-info' text='+ New Note' onClick={addNewNote} />
            <div className="container container-sm d-flex" style={{
                gap: 25,
                flexWrap: 'wrap',
            }}>
            {notes.map((note) => (
                <Note key={note.id} note={note} onClick={deleteNote} text={note.content} />
            ))}
            </div>
        </div>
    )
}