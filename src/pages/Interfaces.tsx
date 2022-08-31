import React, { useState } from 'react';
import { ButtonOnClickEventHandler } from '../data/types';
import { AddForm } from '../components/AddForm';
import Books from '../components/Books';
import { getAllBooks } from '../data/library';

export default function Interfaces() {
  const [listBooks, setListBooks] = useState<string[]>([]);

  const onAddForm = (newBook: string) => {
    console.log('onAddForm - ', newBook);
    setListBooks([newBook]);
  };

  const handleShowAll: ButtonOnClickEventHandler = (): void => {
    setListBooks(getAllBooks);
  };

  return (
    <>
      <h2>Interface Practice</h2>
      <AddForm onNewForm={(book: string) => onAddForm(book)} />
      <button type='button' onClick={handleShowAll}>
        Mostrar todos
      </button>
      <hr />
      <div className='cards'>
        {listBooks.map((book) => (
          <Books key={book} title={book} />
        ))}
      </div>
    </>
  );
}
