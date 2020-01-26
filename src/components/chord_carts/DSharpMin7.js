import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDSharpMin7 from '../../img/keyboards/DSharpMin7.png';

class DSharpMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>D#m7</h6>
                <img src={pianoDSharpMin7} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">D# - F# - A# - C#</p>
            </div>
         )
    }
}
 
export default DSharpMin7