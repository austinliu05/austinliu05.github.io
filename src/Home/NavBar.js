import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/"><a className='underline' href="/">HOME</a></Link>
                <Link to="/projects"><a className='underline' href="/projects">PROJECTS</a></Link>
                <Link to="/consulting"><a className='underline' href="/consulting">CONSULTING</a></Link>
            </div>
        </nav>
    );
}

export default NavBar;