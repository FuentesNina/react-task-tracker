import PropTypes from 'prop-types'
import Button  from './Button'
import { useLocation } from "react-router-dom"

const Header = ({ title , onShow, showAdd}) => {
  const location = useLocation();
  console.log(location);
  // const showButton = (location.pathname === "/" || location.pathname.toLowerCase() === "/react-task-tracker/")

  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname.toLowerCase() === "/react-task-tracker/" && (<Button  color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onShow}/>)}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
