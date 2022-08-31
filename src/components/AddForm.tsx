import React, { useState } from 'react';
import { FormEvent, InputChangeEventHandler } from '../data/types';

export const AddForm = ({ onNewForm }: { onNewForm: Function }) => {
  const [inputValueSearch, setInputValueSearch] = useState('');

  const handleInputSearchChange: InputChangeEventHandler = (e): void => {
    setInputValueSearch(e.target.value);
    console.log('handleInputSearchChange - llamado');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit - llamado -', inputValueSearch);
    if (inputValueSearch.trim().length > 1) {
      onNewForm(inputValueSearch.trim());
      setInputValueSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Opciones</h3>
      <input
        className='search'
        type='text'
        value={inputValueSearch}
        onChange={handleInputSearchChange}
      />

      <button type='submit'>Buscar</button>
    </form>
  );
};
