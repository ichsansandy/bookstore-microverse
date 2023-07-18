import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from './BookCard';
import { fetchBook } from '../redux/books/booksSlice';

function BookListContainer() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <div className="book-container" key="book-container">
      {bookList.map((book) => (
        <BookCard book={book} key={book.item_id} />
      ))}
      <hr />
    </div>
  );
}

export default BookListContainer;
