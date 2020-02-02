import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoASharpMin7 from '../../img/keyboards/ASharpMin7.png';

class ASharpMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>ASharpMin7</h6>
                <img src={pianoASharpMin7} alt="ASharpMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">A# - C# - F - G#</p>
            </div>
         )
    }
}
 
export default ASharpMin7