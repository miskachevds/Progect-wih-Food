import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return <div className="header">
        <div className="wrap">
            <div className="logo"><Link to="/">Home</Link></div>
            <div className="right">
                <ul>
                    <li><Link to="/photos">Photos</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;