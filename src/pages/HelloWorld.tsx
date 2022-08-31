import Nieces from '../components/Nieces';
import PropTypes from 'prop-types';

/**
 * HelloWorld - Variable Practice
 * @param { boolean } printLog
 * @return { string } The HTML content
 */
export const HelloWorld = ({ printLog }: { printLog: boolean }): JSX.Element => {
  //
  // Basic Types
  let userName: string = 'Jesús';
  let age: number = 41;
  let year: any = 2022;
  let yearString: string = year as string; // Assertion example
  

  // Array
  let arrMsg: string[] = ['Hello World !!! ', `my name is ${userName}, `, `i'm ${age} years old.`];

  // let arrNumber : number[] = [1, 2, 3];
  // let arrAny : any[] = ['hola', 1, true];

  // Unions
  // let myVariable : string | number | null;

  // Tuple
  // let arrTuplePlayers : [string, number, boolean] = ['Jordan', 23, false];

  let arrNieces: [string, number][] = [
    ['Valeria', 14],
    ['Valentina', 10],
    ['Vanessa', 6],
  ];

  // Text constuction
  let msg: string = '';
  arrMsg.map((message) => (msg += message));

  if (printLog) console.log(msg);

  return (
    <>
      <h2> Variable Practice</h2>
      <div className='cards'>{msg}</div>
      <br />
      <div className='cards'>
        I have three nieces:
        <ul>
          {arrNieces.map((niece, index) => (
            <Nieces key={index} name={niece[0]} age={niece[1]} />
          ))}
        </ul>
      </div>
    </>
  );
};
//---------------------------------------
// Parameter rules and default values
HelloWorld.propTypes = {
  printLog: PropTypes.bool.isRequired,
};

HelloWorld.defaultProps = {
  printLog: true,
};
