import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDSharpMin from '../../img/keyboards/DSharpMin.png';

class DSharpMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>D#m</h6>
                <img src={pianoDSharpMin} alt="SharpMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">D# - F# - A#</p>
            </div>
         )
    }
}
 
export default DSharpMin