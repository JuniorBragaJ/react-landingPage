import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css'


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }   
        else{
            setButton(true)
        }

    }
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    <div className="navbar-logo-wrap">
                        <div className="navbar-logo-w">W</div>
                        <div className="navbar-logo-b">B</div>
                    </div>
                    <i className="navbar-txt-logo">Werner Borges</i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>                        
                    </li>

                    <li className="nav-item">
                        <Link to='/aboutMe' className="nav-links" onClick={closeMobileMenu}>
                            Sobre mim
                        </Link>                        
                    </li>
                    {/* <li className="nav-item">
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            Serviços
                        </Link>                        
                    </li> */}

                    <li className="nav-item">
                        <Link to='/contact' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Contato
                        </Link>                        
                    </li>
                </ul>
                {button && <Button type="/contact" buttonStyle="btn--outline" buttonSize="btn--medium">Contato</Button>}
            </div>
        </nav>
    </>
    )
}

export default NavBar;
