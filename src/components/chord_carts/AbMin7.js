import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoAbMin7 from '../../img/keyboards/AbMin7.png';

class AbMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>AbMin7</h6>
                <img src={pianoAbMin7} alt="AbMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Ab - B - Eb - Gb</p>
            </div>
         )
    }
}
 
export default AbMin7