import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoASharp7 from '../../img/keyboards/ASharp7.png';

class ASharp7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>ASharp7</h6>
                <img src={pianoASharp7} alt="ASharp7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">A# - D - F - G#</p>
            </div>
         )
    }
}
 
export default ASharp7