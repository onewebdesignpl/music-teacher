import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoASharpMin from '../../img/keyboards/ASharpMin.png';

class ASharpMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>ASharpMin</h6>
                <img src={pianoASharpMin} alt="ASharpMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">A# - C# - F</p>
            </div>
         )
    }
}
 
export default ASharpMin