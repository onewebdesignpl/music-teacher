import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoAbMin from '../../img/keyboards/AbMin.png';

class AbMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>AbMin</h6>
                <img src={pianoAbMin} alt="AbMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Ab - B - Eb</p>
            </div>
         )
    }
}
 
export default AbMin