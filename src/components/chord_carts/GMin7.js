import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGMin7 from '../../img/keyboards/GMin7.png';

class GMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GMin7</h6>
                <img src={pianoGMin7} alt="GMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">G - Bb - D - F</p>
            </div>
         )
    }
}
 
export default GMin7