import logosvg from '../../svg/reshot-icon-foursquare-TQ4W9MDN3L.svg'

const Header = () => {

    const descLogo = "Logo do blog";

    return(
       <header className=" flex-space-between">
        <div className="logo">
            <img src={logosvg} alt={descLogo}></img>
        </div>
        <div className="search">
            <input type='text' className='input-search' name='search'></input>
        </div>
        <ul className="menu">
            <li><a href='#' className='nav-link'>Categories</a></li>
            <li><a href='#' className='nav-link'>About</a></li>
            <li><a href='#' className='nav-link'>Contact</a></li>
        </ul>
       </header>
    )
}

export default Header;