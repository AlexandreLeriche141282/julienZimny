import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.scss';
import facade from '../../picture/logo_texte.png';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className={styles.nav}>
            <img src={facade} alt="Logo" />
            <ul>
                <li>
                    <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/pharm" className={location.pathname === '/pharm' ? styles.active : ''}>
                        Pharmacie
                    </Link>
                </li>
                <li>
                    <Link to="/para" className={location.pathname === '/para' ? styles.active : ''}>
                        Parapharmacie
                    </Link>
                </li>
                <li>
                    <Link to="/ortho" className={location.pathname === '/ortho' ? styles.active : ''}>
                        Orthopédie
                    </Link>
                </li>
                <li>
                    <Link to="/materials" className={location.pathname === '/materials' ? styles.active : ''}>
                        Matériel médical
                    </Link>
                </li>
                <li>
                    <Link to="/actuality" className={location.pathname === '/actuality' ? styles.active : ''}>
                        Actualités
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>
                        Contact
                    </Link>
                </li>
            </ul>
            <a href="tel:0359289387" className={styles.callButton}>03 59 28 93 87</a>
        </nav>
    );
};

export default Navbar;
