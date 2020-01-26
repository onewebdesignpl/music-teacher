import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDSharp7 from '../../img/keyboards/DSharp7.png';

class DSharp7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>D#7</h6>
                <img src={pianoDSharp7} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">D# - G - A# - C#</p>
            </div>
         )
    }
}
 
export default DSharp7