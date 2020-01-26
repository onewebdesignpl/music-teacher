import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/_navbars.scss';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <nav className="main-navigation">
                    <div className="logo-container">
                        <Link to="/">music<span>Theory</span></Link>
                    </div>
                </nav>
            </>
         );
    }
}
 
export default Navbar;