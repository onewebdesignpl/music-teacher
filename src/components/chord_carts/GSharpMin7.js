import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGSharpMin7 from '../../img/keyboards/GSharpMin7.png';

class GSharpMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GSharpMin7</h6>
                <img src={pianoGSharpMin7} alt="GSharpMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">G# - B - D# - F#</p>
            </div>
         )
    }
}
 
export default GSharpMin7