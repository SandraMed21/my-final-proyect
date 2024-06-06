import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { getBooks, addBook, deleteBook } from '../services/bookService'; // Asegúrate de que la ruta sea correcta

const staticBooks = [
  {
    title: 'Boulevard',
    author: 'Flor M. Salvador',
    description: '¿Quién dijo que después de la tormenta sale el sol cuando puede haber un rayo?. Luke Howland, lleno de problemas y sumido en una desesperación profunda, y Hasley Weigel, tan despistada como optimista, no se ajustan al prototipo de pareja perfecta.',
    imageUrl: '/images/Boulevard.jpg',
    pdfUrl: 'https://www.amazon.com.mx/Boulevard-versi%C3%B3n-Flor-M-Salvador/dp/6073810490/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=104BNAGOM027J&dib=eyJ2IjoiMSJ9.KhZf8YqqHyxkSrLf8Gid3DKx1gVXRzgby77Y0X_fksx6DkmeBXHgC52MgkpVwkiIxnbHRVdIJKI33xhiPsPG0BSZHjjRbg4cLKpJ8YwKB2xb_orKS07yoJyJRZz7f7oxfySvHbJfPjWK_Tn4UE_jWenugGa0H4DBt-k1Gyg7k-EupU6zHXzdeU0JGcIrMt6F67PhIEnwoFdrYBHqPRogea1o9rVigVxUdtJiR-8lXj8.1n94k672NHLg80E4K2G9qMZHj-rwGASIlXvemf7JZXc&dib_tag=se&keywords=boulevard&qid=1717633381&s=books&sprefix=boulevard%2Cstripbooks%2C278&sr=1-1&ufe=app_do%3Aamzn1.fos.684d7088-05e5-4efe-9a5c-2533b3a603ad',
  },
  {
    title: 'Romper el Circulo',
    author: 'Colleen Hoover',
    description: 'A veces quién más te quiere. Es quien más daño te hace. Su vida comienza a cambiar el día que Ryle Kincaid, un extraordinario neurocirujano, se fija en ella.',
    imageUrl: '/images/RomperCirculo.jpg',
    pdfUrl: 'https://www.amazon.com.mx/c%C3%ADrculo-Edici%C3%B3n-mexicana-Planeta-Internacional-ebook/dp/B0B14BF1MF/ref=sr_1_2?crid=2LVOKDCDZD2M9&dib=eyJ2IjoiMSJ9.ozzOn6Yw4ZGWGzTaJIuP45Wz3Tx7L3DRPGAjKbNYahyq8lIfKp15MGiJrqSgbZTEJjMZwMIlNP0paSq02aapXgxJr2CXEFRiekAE4mRNNdGl7Sdiej43x1KMSfHVICAX3OohcCB1pD8bDLtuK8ASJJi3JOhqtsEdPxrAi4EpEAQNsTLUJjwJhdpTQwPNfyN98nyRUNxLyEX4t_9y2yYLKDR3R6xSO5I2PFPdmVOLEqI.SCZA4zpzW102hH6WsL9-XT-04HBWKpy3l8OInQ4Soco&dib_tag=se&keywords=romper+el+circulo+libro&qid=1717633450&s=books&sprefix=romper+el+%2Cstripbooks%2C252&sr=1-2',
  },
  {
    title: 'Un Cuento Perfetco',
    author: 'Elísabet Benavent',
    description: '¿Qué sucede cuando descubres que el final de tu cuento no es como soñabas?',
    imageUrl: '/images/CuentoPerfecto.jpg',
    pdfUrl: 'https://www.amazon.com.mx/Cuento-Perfecto-Perfect-Short-Story/dp/8491291911/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QLI6A1Y8FKZJ&dib=eyJ2IjoiMSJ9.nDKWUatJyZGeCcUje1C4XyT8MHbS-81q1AY83929a3EzPqwAF8GoljhRcZ12W6NMtihv3dTrz0IZSKM2G45nCVnGoTn8qywyjxQ0SUeqZIoW2vTQQLiNwbcFAkb1oGvvdQTgNAxojut5yn4jJzMK8Yl0Qnw5i3N33_wcvOuIRPwGLqNBel0OjcDKFPUQstDg30TFWunYusOJqE8ju1oZurP0-uPYK5Eu_9hiRIJQ0SI.jtTuOgweijMMdkiFMNVdZGaHm7ClqTI84SZxKPgRymo&dib_tag=se&keywords=un+cuento+perfecto&qid=1717633491&s=books&sprefix=un+cuento+perfecto%2Cstripbooks%2C200&sr=1-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c',
  },
  {
    title: 'Heist',
    author: 'Ariana Godoy',
    description: '¿Los Steins son adinerados, misteriosos y muy elegantes. Lucen como el retrato perfecto de una familia, pero ¿lo son? ¿Qué se esconde detrás de tanta perfección? Y cuando la muerte comienza a merodear el pueblo, nadie puede evitar preguntarse si tiene algo que ver con los nuevos miembros de la comunidad.',
    imageUrl: '/images/heist.jpg',
    pdfUrl: 'https://www.amazon.com.mx/HEIST-%C2%BFCazar-cazado-Ariana-Godoy/dp/6073806418/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1C3JD3R7Y2BJ4&dib=eyJ2IjoiMSJ9.rJkYCFgoohumRnbugax4ax_ukh_R5-LfMRKEkeISz2l66cht9X28ByUSGFvkTCxI_Hz4U0KqoO3CHZ8ll_3gUpxD1HXMOQZV6tDg88dYFpH7_Uu7DQW7SPIOtnu82QBgV96P3mbeSc30-4SSv1H470xgT0Cr6cOL52WvfxKYBy4auhbmpXywtracWpWK_5EzaeXtyo_zHDvO3WRKe28p20Z1HuXwpb5yQElC-Iwd_dI.j9E8H3ge43ft_VoDZcBBtdOZRpnAah-I1CnYWp-rhnM&dib_tag=se&keywords=heist&qid=1717633522&s=books&sprefix=hist%2Cstripbooks%2C162&sr=1-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c',
  },
  {
    title: 'Todo lo que Nunca Fuimos',
    author: 'Alice Kellen',
    description: 'Porque es el mar, noches estrelladas y vinilos de los Beatles. Porque a veces basta un «deja que ocurra» para tenerlo todo.',
    imageUrl: '/images/TLQNF.jpg',
    pdfUrl: '/pdfs/TLQNF.pdf',
  },
  {
    title: 'Todo lo que Somos Juntos',
    author: 'Alice Kellen',
    description: 'Porque él sigue siendo el chico que aún no ha olvidado. Porque es el mar, noches estrelladas y vinilos de los Beatles. Porque a veces basta un «deja que ocurra» para tenerlo todo.',
    imageUrl: '/images/TLQSJ.jpg',
    pdfUrl: 'https://www.amazon.com.mx/Todo-lo-que-nunca-fuimos/dp/607076627X/ref=sr_1_1?crid=1H8R9NHZCGCP5&dib=eyJ2IjoiMSJ9.Vz0EW3hHyXWiSqoP3qPMNdGhDRVUATzAepuQk98bPMLHG4k7i7hioHM5WG6m2XUoo3mbILnmSND6QVZua4jncu0nSw6whsqHbOzLYF_vrn3coQObeC-IWzAanrn0FeS6gTC0c8VdfNuJxfF8RpIlb3doLWcqZ0c7fvlexz0vc3znRk-KAst9-5iC98qAoMOIhL7BR0Fz0pWGt4VcnjBh5yqFHUY_RJ-kph7SPFwlZ7k.--oxYDAuyUqrFEiD77NNoseXbe7X6pkx5wb3Me88IV0&dib_tag=se&keywords=todo+lo+que+nunca+fuimos+libro&qid=1717633585&s=books&sprefix=todo+lo+que+nunca+fu%2Cstripbooks%2C232&sr=1-1&ufe=app_do%3Aamzn1.fos.684d7088-05e5-4efe-9a5c-2533b3a603ad',
  },
];

const HomePage = () => {
  const [books, setBooks] = useState(staticBooks.slice(0, 10)); 
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
    imageUrl: '', 
    pdfUrl: ''
  });

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      const transformedBooks = booksData.map((book, index) => ({
        id: book.id, 
        title: book.title,
        author: `Author ${index + 1}`, 
        description: book.body,
        imageUrl: `/images/book${index + 1}.jpg`, 
        pdfUrl: `/pdfs/book${index + 1}.pdf`, 
      }));
      
      setBooks(prevBooks => [...prevBooks, ...transformedBooks].slice(0, 6));
    };

    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    const addedBook = await addBook(newBook);
    if (addedBook) {
      setBooks([...books, addedBook]); 
      setNewBook({ title: '', author: '', description: '', imageUrl: '', pdfUrl: '' });
    }
  };

  const handleDeleteBook = async (id) => {
    const deletedId = await deleteBook(id);
    if (deletedId) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };


  return (
    <div className="homepage">
      <h1 style={{ color: "#6A0DAD" }}>Biblioteca Libros</h1>
      <form className="add-book-form" onSubmit={handleAddBook}>
  <div className="input-group">
    <label htmlFor="title">Título:</label>
    <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange} placeholder="Título" required />
  </div>
  <div className="input-group">
    <label htmlFor="author">Autor:</label>
    <input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange} placeholder="Autor" required />
  </div>
  <div className="input-group">
    <label htmlFor="description">Descripción:</label>
    <textarea name="description" id="description" value={newBook.description} onChange={handleInputChange} placeholder="Descripción" required></textarea>
  </div>
  <div className="input-group">
    <label htmlFor="imageUrl">URL de la Imagen:</label>
    <input type="text" name="imageUrl" id="imageUrl" value={newBook.imageUrl} onChange={handleInputChange} placeholder="URL de la Imagen" required />
  </div>
  <div className="input-group">
    <label htmlFor="pdfUrl">URL del Compra:</label>
    <input type="text" name="pdfUrl" id="pdfUrl" value={newBook.pdfUrl} onChange={handleInputChange} placeholder="URL de Compra" required />
  </div>
  <button type="submit" className="add-book-button">Añadir Libro</button>
</form>

      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book">
            <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">
              <img src={book.imageUrl} alt={book.title} className="book-image" />
            </a>
            <div className="book-details">
              <h2 style={{ color: "#6A0DAD" }}>{book.title}</h2>
              <h3 style={{ color: "#333333" }}>{book.author}</h3>
              <p style={{ color: "#555555" }}>{book.description}</p>
              <button onClick={() => handleDeleteBook(book.id)} style={{ backgroundColor: "#6A0DAD", color: "#FFFFFF" }}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
