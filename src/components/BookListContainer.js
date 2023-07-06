import React, { useState } from 'react';

function BookListContainer() {
  const [bookList, setBookList] = useState({
    item1: [
      {
        title: "The Lord of the Rings",
        author: 'J.R.R. Tolkien',
        category: 'Fiction',
      },
    ],
    item2: [
      {
        title: "Fahrenheit 451",
        author: 'Ray Bradbury',
        category: 'Fiction',
      },
    ],
    item3: [
      {
        title: "Frankenstein ",
        author: 'Mary Shelley',
        category: 'Fiction',
      },
    ],
    item4: [
      {
        title: "The Great Gatsby ",
        author: 'F. Scott Fitzgerald',
        category: 'Fiction',
      },
    ],
  });

  return (
  <>
    {Object.keys(bookList).map((book) => (
      <div className="book-card" key={book}>
        {bookList[book][0].title}
        <button>Delete</button>
      </div>
    ))}
  </>
  );
}

export default BookListContainer;
