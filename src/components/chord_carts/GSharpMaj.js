import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGSharpMaj from '../../img/keyboards/GSharpMaj.png';

class GSharpMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GSharpMaj</h6>
                <img src={pianoGSharpMaj} alt="GSharpMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">G# - C - D#</p>
            </div>
         )
    }
}
 
export default GSharpMaj