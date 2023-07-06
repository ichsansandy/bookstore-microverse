import React from 'react';
import BookListContainer from '../components/BookListContainer';
import AddNewBookForm from '../components/AddNewBookForm';

function BookPage() {
  return (
    <>
      <BookListContainer />
      <AddNewBookForm />
    </>
  );
}

export default BookPage;
