import React from 'react';
import BookListContainer from '../components/BookListContainer';
import AddNewBookForm from '../components/AddNewBookForm';

function BookPage() {
  return (
    <main className="page">
      <BookListContainer />
      <AddNewBookForm />
    </main>
  );
}

export default BookPage;
