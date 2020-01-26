import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/_navbars.scss';

class ChordByKeyNav extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <nav className="chord-navigation">
                    <ul>
                        <li><Link to="/c">C</Link></li>
                        <li><Link to="/cis">C#</Link></li>
                        <li><Link to="/dmol">Db</Link></li>
                        <li><Link to="/d">D</Link></li>
                        <li><Link to="/dis">D#</Link></li>
                        <li><Link to="/emol">Eb</Link></li>
                        <li><Link to="/e">E</Link></li>
                        <li><Link to="/f">F</Link></li>
                        <li><Link to="/fis">F#</Link></li>
                        <li><Link to="/gmol">Gb</Link></li>
                        <li><Link to="/g">G</Link></li>
                        <li><Link to="/gis">G#</Link></li>
                        <li><Link to="/amol">Ab</Link></li>
                        <li><Link to="/a">A</Link></li>
                        <li><Link to="/ais">A#</Link></li>
                        <li><Link to="/bmol">Bb</Link></li>
                        <li><Link to="/b">B</Link></li> 
                    </ul>
                </nav>
            </>
         );
    }
}
 
export default ChordByKeyNav;