import PropTypes from 'prop-types';

/**
 * Nieces Function Component
 * @param { Object }  Nieces
 * @param { string }  Nieces.name - name value
 * @param { number }  Nieces.age - age value
 * @return { JSX.Element } The HTML li tag
 */
const Nieces = ({ name, age }: { name: string; age: number }): JSX.Element => (
  <li>{name} she has {age} years old</li>
);
//----------------------------------------
// Parameter rules and default values
Nieces.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
//----------------------------------------
export default Nieces;
