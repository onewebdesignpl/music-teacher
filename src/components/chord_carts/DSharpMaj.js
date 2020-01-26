import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDSharpMaj from '../../img/keyboards/DSharpMaj.png';

class DSharpMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>D#</h6>
                <img src={pianoDSharpMaj} alt="cSharpMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">D# - G - A#</p>
            </div>
         )
    }
}
 
export default DSharpMaj