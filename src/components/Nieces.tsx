import PropTypes from 'prop-types'

const Nieces = ({ name , age } : { name: string, age: number}) => {
  return (
    <li> { name } she has { age } years old </li>
  )
}

Nieces.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Nieces