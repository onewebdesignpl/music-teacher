import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGMin from '../../img/keyboards/GMin.png';

class GMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GMin</h6>
                <img src={pianoGMin} alt="GMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">G - Bb - D</p>
            </div>
         )
    }
}
 
export default GMin