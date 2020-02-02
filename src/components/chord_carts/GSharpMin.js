import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGSharpMin from '../../img/keyboards/GSharpMin.png';

class GSharpMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GSharpMin</h6>
                <img src={pianoGSharpMin} alt="GSharpMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">G# - B - D#</p>
            </div>
         )
    }
}
 
export default GSharpMin