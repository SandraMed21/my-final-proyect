import React, { useState } from 'react';
import { addBook } from '../services/bookService';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, description };
    const addedBook = await addBook(newBook);
    if (addedBook) {
      alert('Book added successfully!');
      // Aquí podrías actualizar la lista de libros
    } else {
      alert('Failed to add book.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
