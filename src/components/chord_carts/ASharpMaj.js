import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoASharpMaj from '../../img/keyboards/ASharpMaj.png';

class ASharpMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>ASharpMaj</h6>
                <img src={pianoASharpMaj} alt="ASharpMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">A# - D - F</p>
            </div>
         )
    }
}
 
export default ASharpMaj