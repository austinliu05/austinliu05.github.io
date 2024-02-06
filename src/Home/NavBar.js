import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/"><a className='underline'>HOME</a></Link>
                <Link to="/projects"><a className='underline'>PROJECTS</a></Link>
                <Link to="/consulting"><a className='underline'>CONSULTING</a></Link>
            </div>
        </nav>
    );
}

export default NavBar;