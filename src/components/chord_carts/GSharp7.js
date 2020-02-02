import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGSharp7 from '../../img/keyboards/GSharp7.png';

class GSharp7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GSharp7</h6>
                <img src={pianoGSharp7} alt="GSharp7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">G# - C - D# - F#</p>
            </div>
         )
    }
}
 
export default GSharp7