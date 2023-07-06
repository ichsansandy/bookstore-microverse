import React from 'react';

function AddNewBookForm() {
  return (
    <form>
      <input placeholder="book title" />
      <select id="cars" name="Author">
        <option value="default" disabled>
          Author
        </option>
        <option value="J.R.R. Tolkien">J.R.R. Tolkien</option>
        <option value="Ray Bradbury">Ray Bradbury</option>
        <option value="J. K. Rowling">J. K. Rowling</option>
        <option value="Mary Shelley">Mary Shelley</option>
      </select>
      <button type="submit">Add New Book</button>
    </form>
  );
}

export default AddNewBookForm;
