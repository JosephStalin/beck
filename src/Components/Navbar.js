import './Navbar.css'
import Search from './Search.js'
import Logo from './Logo.js'
import Categories from './Categories.js'

function Navbar() {
    return (
        <div>
            <Logo></Logo>
            <Search></Search>
            <Categories></Categories>
        </div>
    )
};

export default Navbar;