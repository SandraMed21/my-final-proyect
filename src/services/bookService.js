// // src/services/bookService.js
// const BOOKS_API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Ejemplo de JSONPlaceholder

// export const getBooks = async () => {
//   try {
//     const response = await fetch(BOOKS_API_URL);
//     if (!response.ok) {
//       throw new Error('Error fetching books');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }

// src/services/bookService.js
// src/services/bookService.js
// src/services/bookService.js
const BOOKS_API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Ejemplo de JSONPlaceholder

export const getBooks = async () => {
  try {
    const response = await fetch(BOOKS_API_URL);
    if (!response.ok) {
      throw new Error('Error fetching books');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export const addBook = async (book) => {
  try {
    const response = await fetch(BOOKS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });

    if (!response.ok) {
      throw new Error('Error adding book');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${BOOKS_API_URL}/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Error deleting book');
    }

    return id;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

