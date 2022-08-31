interface Book {
  id: number;
  title: string;
  author: string;
  coAuthor?: string;
  isLoan?: (id: number) => void;
}

const library: Book[] = [
  {
    id: 1,
    title: 'Carrie',
    author: 'Stephen King'
  },{
    id: 2,
    title: 'It',
    author: 'Stephen King'
  },{
    id: 3,
    title: 'Soy leyenda',
    author: 'Richard Matheson'
  },{
    id: 4,
    title: 'El arte de la guerra',
    author: 'Sun Tzu'
  },{
    id: 5,
    title: 'Yo, Robot',
    author: 'Isaac Asimov'
  }
];

const getBookById = (id: number) => library.find( ( book ) => book.id === id);
const getBookByTitle = (title: string) => library.find( ( book ) => book.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
const getAllBooks = (listBooks: String[]) => library.map( (book) => book.title );

export {
  library as default, getBookById, getBookByTitle, getAllBooks
};
