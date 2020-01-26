import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/_navbars.scss';

class ChordByTypeNav extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <nav className="chord-type-navigation">
                    <ul>
                        <li><Link to="#">major chords</Link></li>
                        <li><Link to="#">minor chords</Link></li>
                        <li><Link to="#">seventh chords</Link></li>
                        <li><Link to="#">extended chords</Link></li>
                        <li><Link to="#">sus chords</Link></li>
                        <li><Link to="#">dim chords</Link></li>
                        <li><Link to="#">aug chords</Link></li>
                        <li><Link to="#">add chords</Link></li>
                        <li><Link to="#">altered chords</Link> </li>
                    </ul>
                </nav>
            </>
         );
    }
}
 
export default ChordByTypeNav;