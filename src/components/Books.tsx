import library, { getBookByTitle } from '../data/library';

/**
 * Book Function Component
 * @param { number }  id - identification number
 * @return { JSX.Element } The HTML
 */
const Books = ({ title }: { title: string }): JSX.Element => {
  let html: string = '';
  let book = getBookByTitle(title);
  if (book) html = book.title + ' - ' + book.author;
  return <>{html}<br /></>;
};

export default Books;
