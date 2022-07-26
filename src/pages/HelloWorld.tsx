import Nieces from '../components/Nieces'
import PropTypes from 'prop-types'

export const HelloWorld = ({ printLog } : { printLog : boolean}) => {
  // Basic Types
  let userName : string = 'Jesús';
  let age : number = 41;

  // Array
  let arrMsg : string[] = [
    'Hello World !!! ',
    `my name is ${userName}, `,
    `i'm ${age} years old.`
  ];
  // let arrNumber : number[] = [1, 2, 3];
  // let arrAny : any[] = ['hola', 1, true];

  // Tuple
  // let arrTuplePlayers : [string, number, boolean] = ['Jordan', 23, false];
  let arrNieces : [string, number][] = [
    ['Valeria', 14],
    ['Valentina', 10],
    ['Vanessa', 6]
  ]

  // Unions
  // let myVariable : string | number | null;

  if (printLog) {
    let msg : string = '';
    arrMsg.map( message => (
      msg += message
    ))
    console.log(msg);
  }

  return (
    <>
      <div className="cards">
      {
        arrMsg.map( message => (
          message
        ))
      }
      </div>
      <br />
      <div className="cards">
        I have three nieces:
        <ul>
        {
          arrNieces.map(( niece, index ) => (
            <Nieces key={ index } name={ niece[0] } age={ niece[1] } />
          ))
        }  
        </ul>
      </div>
    </>
  ) 
}

HelloWorld.propTypes = {
  printLog: PropTypes.bool.isRequired
}

HelloWorld.defaultProps = {
  printLog: true
}